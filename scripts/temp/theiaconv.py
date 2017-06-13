import glob
import os
import platform
import shutil
import subprocess
import sys


def theiaconv(infld):
    if platform.system() == "Linux":
        sh = False
    elif platform.system() == "Windows":
        sh = True
    else:
        sys.exit('Platform ' + platform.system() + 'not supported.')

    basename = 'SENTINEL2A_'
    ref = glob.glob(infld + '/*FRE_R1*.TIF')[0]
    date = os.path.basename(ref).split('____')[1].split('_')[0]
    tile = 'T' + os.path.basename(ref).split('____')[0].split('_')[-1]
    niv = 'L2A_'
    # niv et tile
    basename += date + '_' + niv + tile + '_D_V1-3'
    outtilefld = infld + '/../' + tile
    outfld = outtilefld + '/' + basename

    if not os.path.exists(outtilefld):
        os.mkdir(outtilefld)
    if not os.path.exists(outfld):
        os.mkdir(outfld)

    cmd = ['otbcli_SplitImage', '-in', ref, '-out', outfld + '/' + basename + '_FRE_B.tif', 'int16']
    subprocess.call(cmd, shell=sh)
    for oex, nex in zip(['B_0', 'B_1', 'B_2', 'B_3'], ['B2', 'B3', 'B4', 'B8']):
        of = outfld + '/' + basename + '_FRE_' + oex + '.tif'
        nf = outfld + '/' + basename + '_FRE_' + nex + '.tif'
        os.rename(of, nf)

    cmd = ['otbcli_SplitImage', '-in', ref.replace('_R1', '_R2'), '-out', outfld + '/' + basename + '_FRE_B.tif',
           'int16']
    subprocess.call(cmd, shell=sh)
    for oex, nex in zip(['B_0', 'B_1', 'B_2', 'B_3', 'B_4', 'B_5'], ['B5', 'B6', 'B7', 'B8A', 'B11', 'B12']):
        of = outfld + '/' + basename + '_FRE_' + oex + '.tif'
        nf = outfld + '/' + basename + '_FRE_' + nex + '.tif'
        os.rename(of, nf)

    if not os.path.exists(outfld + '/MASKS'):
        os.mkdir(outfld + '/MASKS')

    sat = outfld + '/MASKS/' + basename + '_SAT_R1.tif'
    edg = outfld + '/MASKS/' + basename + '_EDG_R1.tif'
    clmin = ref.replace('PDTIMG', 'PDTANX').replace('FRE', 'CLD')
    clmout = outfld + '/MASKS/' + basename + '_CLM_R1.tif'

    cmd = ['otbcli_BandMath', '-il', ref, '-out', sat, 'uint8', '-exp', '(0*im1b1)']
    subprocess.call(cmd, shell=sh)
    cmd = ['otbcli_BandMath', '-il', ref, '-out', edg, 'uint8', '-exp', '(im1b1==-10000)']
    subprocess.call(cmd, shell=sh)

    shutil.copyfile(clmin, clmout)

    print 'Reformat complete!'


if __name__ == '__main__':
    theiaconv(sys.argv[1])
