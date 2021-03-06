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
import math

from config import Config

import fileUtils as fu
import repInShape as rs


def getAreaByRegion(allShape):
    """
    IN :
        allShape [list] : list of path to ground truth shapeFile
    OUT :
        allArea [list] list of ground truth's area by regions in meter square
    """
    shapeSort = []
    for shape in allShape:
        region = shape.split("_")[-4]
        shapeSort.append([region, shape])
    shapeSort = fu.sortByFirstElem(shapeSort)
    allArea = []
    for region, shapesRegion in shapeSort:
        area = 0
        for shapeF in shapesRegion:
            area += rs.getShapeSurface(shapeF)
        allArea.append([region, area])
    return allArea


def genCmdSplitShape(config):
    f = file(config)
    cfg = Config(f)
    maxArea = float(cfg.chain.mode_outside_RegionSplit)
    outputpath = cfg.chain.outputPath
    dataField = cfg.chain.dataField
    execMode = cfg.chain.executionMode

    allShape = fu.fileSearchRegEx(outputpath + "/dataRegion/*.shp")
    allArea = getAreaByRegion(allShape)

    workingDir = " --wd $TMPDIR "
    if execMode == "sequential":
        workingDir = " "

    print "all area [square meter]:"
    print allArea
    shapeToSplit = []

    dic = {}  # {'region':Nsplits,..}
    for region, area in allArea:
        fold = math.ceil(area / (maxArea * 1e6))
        dic[region] = fold

    TooBigRegions = [region for region in dic if dic[region] > 1]

    print "Too big regions"
    print TooBigRegions

    for bigR in TooBigRegions:
        tmp = fu.fileSearchRegEx(outputpath + "/dataAppVal/*_region_" + bigR + "*.shp")
        for shapeTmp in tmp:
            shapeToSplit.append(shapeTmp)
    print shapeToSplit

    # write cmds
    AllCmd = []
    for currentShape in shapeToSplit:
        currentRegion = currentShape.split('/')[-1].split("_")[2].split("f")[0]
        cmd = "python splitShape.py -config " + config + " -path.shape " + currentShape + " -Nsplit " + str(
            int(dic[currentRegion])) + " " + workingDir
        AllCmd.append(cmd)

    fu.writeCmds(outputpath + "/cmd/splitShape/splitShape.txt", AllCmd)
    return AllCmd


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="this function allow you to split a shape regarding a region shape")
    parser.add_argument("-config", dest="config", help="path to configuration file", required=True)
    args = parser.parse_args()

    genCmdSplitShape(args.config)
