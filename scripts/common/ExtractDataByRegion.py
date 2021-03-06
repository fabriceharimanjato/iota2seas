#!/usr/bin/python
# -*- coding: utf-8 -*-

# =========================================================================
#   Program:   iota2
#
#   Copyright (c) CESBIO. All rights reserved.
#
#   See LICENSE for details.
#
#   This software is distributed WITHOUT ANY WARRANTY; without even
#   the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
#   PURPOSE.  See the above copyright notices for more information.
#
# =========================================================================

import argparse

from config import Config
from osgeo import ogr

import NbView
import fileUtils as fu


def ExtractData(pathToClip, shapeData, pathOut, pathFeat, pathConf, pathWd):
    """
        Clip the shapeFile pathToClip with the shapeFile shapeData and store it in pathOut
    """

    f = file(pathConf)
    cfg = Config(f)
    cloud_threshold = cfg.chain.cloud_threshold
    featuresPath = cfg.chain.featuresPath

    currentTile = pathToClip.split("_")[-1].split(".")[0]

    driver = ogr.GetDriverByName('ESRI Shapefile')

    dataSource = driver.Open(pathToClip, 0)  # 0 means read-only. 1 means writeable.
    # Check to see if shapefile is found.
    if dataSource is None:
        print 'Could not open %s' % (pathToClip)
    else:
        layer = dataSource.GetLayer()
        featureCount = layer.GetFeatureCount()

        if featureCount != 0:
            tmpdir = ""
            pathName = pathWd
            command = "cp "
            suffix = " " + pathOut
            if pathWd == None:
                tmpdir = "/tmp"
                pathName = pathOut
                command = "rm "
                suffix = ""

            CloudMask = featuresPath + "/" + currentTile + "/CloudThreshold_" + cloud_threshold + ".shp"
            NbView.genNbView(featuresPath + "/" + currentTile, CloudMask, cloud_threshold, pathWd)

            path_tmp = fu.ClipVectorData(shapeData, pathFeat + "/" + currentTile + tmpdir + "/MaskCommunSL.shp",
                                         pathName)
            path_tmp2 = fu.ClipVectorData(path_tmp, pathToClip, pathName)
            path = fu.ClipVectorData(path_tmp2, CloudMask, pathName)
            if fu.multiSearch(path):
                NoMulti = path.replace(".shp", "_NoMulti.shp")
                fu.multiPolyToPoly(path, NoMulti)
                fu.removeShape(path.replace(".shp", ""), [".prj", ".shp", ".dbf", ".shx"])
                fu.cpShapeFile(NoMulti.replace(".shp", ""), path.replace(".shp", ""), [".prj", ".shp", ".dbf", ".shx"])
                fu.removeShape(NoMulti.replace(".shp", ""), [".prj", ".shp", ".dbf", ".shx"])
            if pathWd != None:
                fu.cpShapeFile(path.replace(".shp", ""), pathOut + "/" + path.split("/")[-1].replace(".shp", ""),
                               [".prj", ".shp", ".dbf", ".shx"])
            else:
                fu.removeShape(path_tmp.replace(".shp", ""), [".prj", ".shp", ".dbf", ".shx"])
                fu.removeShape(path_tmp2.replace(".shp", ""), [".prj", ".shp", ".dbf", ".shx"])


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="This function allow you to create N training and N validation shapes by regions cut by tiles")

    parser.add_argument("-shape.region", help="path to a shapeFile representing the region in one tile (mandatory)",
                        dest="clip", required=True)
    parser.add_argument("-shape.data", dest="dataShape", help="path to the shapeFile containing datas (mandatory)",
                        required=True)
    parser.add_argument("-out", dest="pathOut", help="path where to store all shapes by tiles (mandatory)",
                        required=True)
    parser.add_argument("-path.feat", dest="pathFeat", help="path where features are stored (mandatory)", required=True)
    parser.add_argument("-conf", help="path to the configuration file which describe the classification (mandatory)",
                        dest="pathConf", required=False)
    parser.add_argument("--wd", dest="pathWd", help="path to the working directory", default=None, required=False)
    args = parser.parse_args()

    ExtractData(args.clip, args.dataShape, args.pathOut, args.pathFeat, args.pathConf, args.pathWd)
