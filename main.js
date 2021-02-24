const d = [5, 1, 2, 1]
// const d = [16, 4, 9, 8]
// const d = [16, 504, 539, 585]
const pizzeria = [
    ['onion', 'pepper', 'olive'],
    ['mushroom', 'tomato', 'basil'],
    ['chicken', 'mushroom', 'pepper'],
    ['tomato', 'mushroom', 'basil'],
    ['chicken', 'basil']
]
const data_extract = [{
    157: [" jqi eon wsc ywd hec pw fae okh tme ccn lej teb qgh jai nag epc ktc if zim hvl pnc zzf pvn fbg dfl iu oli xvm xvn dwf bsc mhm pfk xnm ypm uhi cuj eyl pwb rl eqf sdn uyc poc qyl aad iqo twj yyf jcb bm dgm xod vsl hgm rcd kve erg blh pxh dhd nth cg svj qrg rlb jdb ofb cn svm ppo fdo nlo t sfg fue pyb vln owb cwn zln yjm pyh pyg gwn swb owm sob gon ooi pic ukd ud dx ico wgd nem ukl um vmo qcm gpc jvf ilb kxm uw mtj wxc chj prk mw vvj cyb zvm shi iue lbn ulo euj oyi bon fgd hkf oqe dkl imm hkl tsg zwh zwk czg pcj ymk mvb dth nxf ivi efb afe wx ptf bhj uvj cbi tld plh xf rhi rhk hub ufe zhe ewj yfg yfi zhj jym"],
    30: ["xbk tsb ouh iok jol msn nij ixe ftg fpd gjb dlf ss qzl jld sve lto nni otm tzn ppk yzn zzn bbn the zpj rdi yln asn dic"],
    57: [" agf fmi vud bmo hmk egk wse jeh vqg zqh rmm gxe nai ipf prc bjm xzf bfm cdk fbl rg wpm sdi gqh fe jog twe roc uym vwk btc smj qij uqn oin xoo hxm hpd tcm jxl zcj ntf onb uvc npd ou uvi kt vtk kjl kx awe xpl wjg zhe w csf"],
    219: [" ccc ps iok fze pmm vic ctf apg ram glh cdd jrj zal kdb fjl bbh pnj xne njj xnm rbm fkd iqi twf ced iqj bcc uyk cej rsn lgg xoh see ard zsk sed dxi yql ejb mzk flf kfb qrg kfh ibe p ct lhl wnn isc lyg lyj hqf tt goh gok dig ekj dil fmo acm lii bvb sgf kxb han sgh lzf jvi kxl ut yck rvh tzm khf hbc khg yth vni ytn jwd jwi pbn emk vy lkc kib syn fo nol jgg oqo qec hcl gak fw ieo jxc kzc rgl rgk wai qvg afi jhg xc vpg awg byj sjl rho dmh wbi osb ckj ywg kkh zyj nqm hei yk bzn yt val bjl bjn jji nro oto xvj mpo gdl zj odh eqg nbo nbn ouc vbm jl nsg kmg hgd ouj hge fcf jkl oeo erj yio knd ovg ual uao yzf jlg vtj jln phg ndg phh xhb owc gwn bmo tqd jmm ogb lw rmj ggn etd dri cpj pzi jng mtj ghf rne hjj xzm dbh edn rnl whd fwh muc cqj oyi lsh vwc nt gii jon qmg qmj gzh anb xkg evh mvb vgj bpf sai ltj uve cbc gjj krm jpn wzk fhn mfi csg ynl bqg yno ufn gkc"],
    92: [" acb xdl ckk ruh nuk baf msn fei mcc nmk tql qki wsj ctb ue fak mci naf bzk scd woo yki won um cxn bnd oco pze hvi jrd trc rvh rrd tzj ili djl djn en ilo jfk oll bbn mde cue jwf vfh euk iui fsi ydj fkc iuj bcb ceb nse imf qym roc ieg tkc kae mef ngg meh yqj gao wif ken qek ezl tch rcj kzh xoo bpl kp ppg ddf ple knk yvk ibg uje zpk mbk yfc cob zhi aok bmg isf isi"],
    24: [" rs grm qxi mmb mti yue jki it wsk mmn qcc umi zri uec ton yl tlj fy sac pf tk eb hpd iwm"],
    246: ["gkg rqb tuc hml jqm deg nif vym qok jah nin scb exi ipe qq dfc bbe ehh rrd njj aqc rd kdn xnl mye dwl vjn aql cec bcg rsm kef dxc wmd iaf vkf rcd iak arf xoo yab uin qaj yae ejf mzm jtj gng fli cfg dhh i abl vle lhk mjn rdb r thi dyi dyk jud lyf kwg aso ybf gof tt juk tyg iso mkb nmc zuf nmi hag ysm zeb til ukm qch tin sgm hri rvj qtl rvl ljk eq ytg jwc kyd gqb vp rfo rwb dkc rwc rwf bge zfn bgg quk rwk tkc we wqi kin pcg zgh yeh sze cji wz wao enm zxg ifh lll yvi ifk unj sjj vpm gsi osf ckm fab jie lmj gcd uoe bzc yf jik qge jim hem uoo vqo xef ixj zin wco frn zze pvm gdc vre xvf lnm rjf qhh odf iy zl tnn xfe iyj dok loc yho oui jo loj eae toe mad smj azn ftc cnb oeo xgj dpj mrf wen jle ero fdi rle gfm vtn wfb ndo mbm ubj hym xhl pye lqd msd kod vud jmh dac lt mso jmk ggk vui fen nef zmd lal nve mtc kpc qlb kpm ohg ylc pjm nc boc oye lsb boh eum wye uug cae uui cak lcg xkc lcj ymi ngo vgi oi ymn oze bpj hlb crm hlg ddi inm nhd xlc srm fyc nhl iod hmc"],
    327: ["vyd aon hmh def pt bac cck zqb ssm okk xmc pmo vij nze mxd fzm rah brh ugm jrc ql nzh gld hne glf ktk ipi zai ktn qx vzm ehn ypb uxn fjn olj bbo mhi lfh qpm rb lfl myc aqf eyl cul sdn gmc eic hog rsf poc uyl omk mih mij arb lgk lgo tgl mzf btj rcn ejd yag flg svf onb qrc lhc lhb cfi fln bdj bdl mjj zti thb mjn yrj cwg mjo qbf cwj wnm dyn ujm hqf lyl cge die eki jum mkb nmj pqo ds bve zuk hai wok paf kxd kxe fnc ite lzh sgn lzm pao djg zek qtg qtl bfl khh ytf mli vnb xrf opo rfe hbk wpn vno vnn kyg tjn bgd qub iuj ydi vx qug fj rwj oqg zwb quk ied nok tkd sic rgc vol tki yec xcc qeo kzi bhd bhf rxj jhe kjf ptj llh zxi zxk xe qfd obb ifn xj rhh xl gbo xn iwd jyj huj hui xw jym xz kke gcc pun tmd axd xul zyn hx axg uom wsn tmm bjb dnf wck nre ygn qxg van xvc wtd qxn bjn gdj upl hwc zjf aie eqh pwf eqj mqb don qyj nsi jkh iii mqo rkd wuh fci xwn ncd smh hgm ncg xgd mai xgh blb zkn kh cng qzh ovf cnj ijc lpf fdd ntl knl yzn tpj ndg hyd fub phm rlo yjh fug nub lh gwl akh dqk esn ikd lo wwe ikh ikj usf wwl tql mcg fvg gxh ogn bnb mtb mg ykm etl gxn zmo ucm xzc tan dbg mdf dbl fwc udc cqi amf eul dsk amk hkf vwf sqh hkm sqj cam oih tcb evd uee wif evh zol cre wij gzn dtj crl xko ind cro hli ot krm nhc efl srj ttk cbj gjn gjo vhe qno bqc tdd aoe duh pf pg ewh vhh fyl bqj ufn"],
    42: ["jkb xyb gmi ced hok noh nv jcb hgg xob ogb roj hgn qmj zsj apd vch zcc fjb xzd hnk zvc gnm png rvl rpf qtm ndc mji efm xpd jdi ohg tli tf gyf upo v bwl zno oye bid"],
    319: ["pp vyh ssf ioo fik vyk jab fzb jae pmn okl bre wkk xmm dvj nzd ugm nzj mxi scn ram nzl zag jrk ae rre ipk qpf zan dfh pnd glk fjm tvm mhf qpl ypf kdh rb eyf av aqg rh ypo aqh hof uye bc be jcb sum yqb aaj lgh iai wmk uik tgi btk ezn vkn btl irc dxn arn lxj txe nlb g txj nlg yrc ujc kfn cwg rde dyh cu asd vlk xpl lyc qbj tm wno lyh qbm rdn ts ybg tt cgd bee tyj swi kgc goo qsl zuh mkk dzf sgg sgf yso atl ukn jvg gpg jvj bff qte bfh ytd lji xri khk vnj rff hbn vq hse kyk dkc iuh cie dkf que lkb gql aei rwk czb xsg sib jgi iej xsi pcd rgj jxc tkk sij ivc wq qen dle rxg grl llb gj enn ptj gbd mnj gbe ifj kjk zxm awd rhj iwe wbd xq xdg pdn huj wbg bif zho qwf xy vqf osn xuk zym ocg ygg hvg vad bje clf ahd zin gtk yx qxg oth wcn yxd ihc nrm zzj upe pfc gdi xvm yxn hfo wdd iyf iyn wdk dok oul wuf azd jv azf rkf jw azj vso tom mak zkh uae zkj man nte uak mrc hhe ovk bln wvc lpm phm vde wfi esk nuf ikc nug ikb pyk vud owm pyn lqi akn xyg ls jml wwk xib xid mch mck ykh ogn mf zmn pze taj nvd xio dro ilc mo vvf wxj wxi dbh ilo mde rnj qln ylj gym bog ylm ylo nk euo nl joh tsb hke lsl eed sqd jok pkc gim imo fgk lce pkl cao gzf ngk gzh crc fxk gzm ok nxj vxe ttd uve ddd vxi ddg lto ov srg pld ddk ttl zpb vhc ynf bqb nhn vhi mwc dui ksf gkb"],
    201: ["mwk egf okb pmh bal yoe ctf zqm nzh nzk gld qpd dfg stf qv fjk cdh qpe aj dwb aqb kue aqk tfl zbd suc kul jsk omb bg sun bq lgi cvd btb qag wml irb sen uzd fld mjb zcm nle ck yrb qri cfn jdj kfk rdk tm hqc qbm gof ts swi ruh ybn jec acm dp zuh du cxe tze xaj sxe gpi itn nng idb prj adm vg hbl iub nob fg jgc jgf yug kih avd iej avf jxb zgd oan ptg cjl mnn gu yvn wrl xj xto pdh pdl sjo wbf bie agf ryg jij uoj hem gco vqm jzd xeg dni nrc ote qxj bjk dnn mpg fbe upc zd iho pfl wdc hwh guk fsk iic vsb yyg aio azf fci azg zkc smo gvh dpf ntb pxh knc mrh lpo gfo mbl bmb gwi gwh lh msf nuj kof lqg ubo tqd soc xyj dae lab tql wwn som pii pzl nvm dbe hjh mt rng mdb qlf ghl dbm cqe znm ame nwd gyn lsc vwb vwd hkf jon wyl rog nge zoc og dtj oze nxh inn hll plj qnm ewe ewg sbi cso lug duo"],
    273: [" bab ssc pt iok ksl hmn mgb hmm yob exb okj nii qb wkf nzb ugh vii ctk zac dfe bbc pnb ehj stg rrf fjm ipo qpl kdj rb sdb aq cuc lfm lfn tfh uhl dwm sud cei ome aaf uym mid bm xoh ezg ezj rce bx bth qaf ark jth ejc rtc svc eje cd cff txi rtf rti cfi vlc wnd qrm dyc qro nll v qbh isd ruc beh beg jeb lid dil hqo pqn bvb lin jen vmi vmn jvc ukm sgk jvb qck hre pal sgn djc tzb dje sxd tzi xak rvh bfh nng adj bfj zvb nni djo ljf khh wpc ide ado nnl hbn tjl vp kyi gqg hsh foh vt bgf xbk emj zwf yud nom ieh gaf jgl xsm czn pcj wad xce jxk dlf aff grm gk kjh ifg vpf jhm obd jyd jyf jyh xde eod yfj zhk eog zhj bic huk wbn fab wsd wsg zyj kkj ywm gcm skj nah dnc vah zim lnc ij frl jjd yxf mpn iy pfh zm aym yhf fsc xfh xwe ead eag hgl xwn vsl ize blc yzb ntg gfb ero ijc mri ebc urh ofe fdo gfo phj dqb qjm vdf esh bmh nue akh ll ako vuh tqf wwh neb him soj nee mcf nei ogo mcl tac taf taj ml ghd edb edd jnm kpm rnd ffj ilm pjg mdd ghn gyg mdk aml oyj mum wyh pkg dtc kah ymf gzg vge sag tcm mvg jpg mvj sao ddc ozn ozm nxn ddf pld fyb zpi csb zpk ldl nyb zpm ewm dun jqf hmc"],
    59: ["wwc xyc hk dij rmd run puo scc sgi ktc kxi tai ur vaj nzm oxi opc iln iw pnn uto rnn xjd aqg xji je xjn uyb gmd lse fgb ium oyn kmi lsm yue mmk iim mmm wme gai gzc rkl xkl evl nxd uaf kg tgo jpd npc qvn ifh qnl jub xdd zlm fqg dmg"],
    128: [" jib bij ryn kkf qgc lee mgf xul qgg mgj vih qgl dne bjf bbe gli qxn klg zzh upf ayb zjb pfm xnm gue fsc eie vbo bd iqm bch uyk omd smc vsh yqd dxc vkd mij lgk pxb blf aje kh qzk fdc sy qjb gno ejo ebm ibk gwe lyc ash vlo lyj dqj beb xho cgh cgk lt ice ly him dan xif xih dzl oxb ald uci atn pzd xik jvh ec zen fnk eh nnb hrl tzk ghf rvj mx dbk utl prn wpe ohl pbj aul boh aun nwf foh xbk ydn jgb fge oqi psj cin oqj hcf umb wc oif tke zoc kah roo fxi ivc gf ozn hlf gk dlo gbb npk ojc ttj jhk kbc sbc"],
    25: ["rqf mgb wd vmf uun tic gaj evc wm uio nzg svc prd llg ir xc yzk kbd tnf nfi qhi qbi vjn dmf twb"],
    3: ["ztl ljg yu "]
}]
let data_array, total;
const algorithm = (pizzas, x, y, z) => {
    let data_array = []

    total = Math.floor((x * 2) + (y * 3) + (z * 4))

    for (let index = 0; index < x; index++) {
        data_array.push(2)
    }
    for (let index = 0; index < y; index++) {
        data_array.push(3)
    }
    for (let index = 0; index < z; index++) {
        data_array.push(4)
    }
    let k = []
    // console.log(data_array, data_array.length, ', total no. of people : ' + total); 

    for (let index = 0; index < data_array.length; index++) {
        let a = data_array[index],
            o
        k.push(a)
        if (k.length == 2) {
            o = k[0] + k[1]
        }

    }
    data_array = data_array

    return data_array;
}
algorithm(d[0], d[1], d[2], d[3])
let cf = []
const rep = (element) => {
    //arrays
    let gv = []
    gv.push(element)
    // console.log(gv);
    cf.push(gv)
}
let rt = []

const gt = () => {
    algorithm(d[0], d[1], d[2], d[3]).forEach((element, i) => {
        rep(element)
        // rows(element)

    });
    algorithm(d[0], d[1], d[2], d[3]).forEach((element, i) => {
        new bbg(element)
        // rows(element)

    });
    // console.log(rt)
}

let i = 0

class bbg {
    constructor(elm, index) {

        this.element = elm;
        this.index = index;

        i++;

        for (let index = 0; index < cf.length - i; index++) {
            let g;

            g = cf[index + i].map(arg => [elm, arg]);
            rt.push(g);
        }
    }
}
gt()
let teams_to_get_deliveries = []
const available_teams = (pizza) => {
    rt.forEach((root, i) => {
        root.forEach(element => {

            if ((element[0] + element[1]) == 5) {
                // console.log('yess! it works', root);

                teams_to_get_deliveries.push(root)

                return teams_to_get_deliveries;
            }
        });
    });
}
available_teams()

const maximizing_the_ingredients = (pizza) => {

    const total_ingredients = {
        total: 0,
        ingredients: [],
        teams_to_get_pizza: total

    }

    pizzeria.forEach(element => {

        element.forEach(eleme => {

            total_ingredients.ingredients.push(eleme)

        });
    });
    total_ingredients.total += total_ingredients.ingredients.length

    total_ingredients.unique_ingredients = [...new Set(total_ingredients.ingredients)]

    console.log(total_ingredients);
}
maximizing_the_ingredients()