import operator
import os
import sys

import ogr
import pylab


def createRenderingParameters(shp, class_field, nomenclature_field, suffix='', colormap=None):
    if colormap is None:
        colormap = 'gist_rainbow'

    ds = ogr.Open(shp)
    ly = ds.GetLayer(0)
    cldict = {}
    for f in ly:
        cln = f.GetField(nomenclature_field)
        clid = f.GetField(class_field)
        cldict[cln] = clid

    sorted_cldict = sorted(cldict.items(), key=operator.itemgetter(1))
    print sorted_cldict

    nm_fn = os.path.splitext(shp)[0] + '_nomenclature' + suffix + '.csv'
    cm_fn = os.path.splitext(shp)[0] + '_colormap' + suffix + '.txt'
    nm = open(nm_fn, 'w')
    cm = open(cm_fn, 'w')

    nc = len(cldict)
    cmfull = pylab.get_cmap('gist_rainbow')
    cmsel = [cmfull(1. * i / nc) for i in range(nc)]

    i = 0
    for k, v in sorted_cldict:
        nm.write(k + ':' + str(v) + '\n')
        cm.write(str(v) + ' ' + str(int(255 * cmsel[i][0])) + ' ' + str(int(255 * cmsel[i][1])) + ' ' + str(
            int(255 * cmsel[i][2])) + '\n')
        i += 1
    nm.close()
    cm.close()
    ds = None

    return i


if __name__ == '__main__':
    if len(sys.argv) == 4:
        print createRenderingParameters(sys.argv[1], sys.argv[2], sys.argv[3])
    elif len(sys.argv) == 5:
        print createRenderingParameters(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
