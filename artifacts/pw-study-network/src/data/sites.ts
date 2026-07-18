export type SiteCategory = 'DIRECT' | 'KEY-BASED' | 'LOGIN';

export interface Site {
  name: string;
  url: string;
  category: SiteCategory;
  status: 'Active' | 'Checking';
  logo: string;
  brand: string; // e.g. "PW by Ankit Chaudhary"
}

// Route through our API proxy so logos load in all environments
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const gf = (domain: string) => `${BASE}/api/logo?domain=${domain}`;

// Named brand logos for major platforms
const LOGOS = {
  pw:          gf('pw.live'),
  rwa:         gf('rojgarwithankit.in'),
  nexttopper:  gf('nexttoppers.com'),
  unacademy:   gf('unacademy.com'),
  vibrant:     gf('vibrantacademy.ac.in'),
  missionjeet: gf('missionjeet.in'),
  padhle:      gf('padhle.com'),
  mastersahab: gf('mastersahab.com'),
  munil:       gf('munilagarwal.com'),
  sway:        gf('sway.cloud.microsoft'),
  sciencefun:  gf('scienceandfun.in'),
};

const BY = 'by Ankit Chaudhary';

export const SITES: Site[] = [
  // ── DIRECT ──────────────────────────────────────────────────────────────
  { name: 'VidCloud',                         url: 'https://vidcloud.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: gf('vidcloud.eu.org'),        brand: `VidCloud ${BY}` },
  { name: 'StudyRatna',                        url: 'https://studyratna.cc/',                                           category: 'DIRECT',    status: 'Active',   logo: gf('studyratna.cc'),           brand: `StudyRatna ${BY}` },
  { name: 'StudyRays',                         url: 'https://studyrays.cc/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('studyrays.cc'),            brand: `StudyRays ${BY}` },
  { name: 'VedStudy',                          url: 'https://vedstudy.com/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('vedstudy.com'),            brand: `VedStudy ${BY}` },
  { name: 'RareStudy',                         url: 'https://rarestudy.in/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('rarestudy.in'),            brand: `RareStudy ${BY}` },
  { name: 'TestFile',                          url: 'https://testfile.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: gf('testfile.eu.org'),         brand: `TestFile ${BY}` },
  { name: 'VidyaKool',                         url: 'https://vidyakool.streamfiles.eu.org/',                            category: 'DIRECT',    status: 'Active',   logo: gf('streamfiles.eu.org'),      brand: `VidyaKool ${BY}` },
  { name: 'DeltaStudy (Vibrant)',              url: 'https://deltastudy.site/vibrant',                                  category: 'DIRECT',    status: 'Active',   logo: LOGOS.vibrant,                 brand: `Vibrant Academy ${BY}` },
  { name: 'DeltaStudy (MunilSir)',             url: 'https://deltastudy.site/munilsir',                                 category: 'DIRECT',    status: 'Active',   logo: LOGOS.munil,                   brand: `MunilSir ${BY}` },
  { name: 'DeltaStudy (Rojgar With Ankit)',    url: 'https://deltastudy.site/rojgarwithankit',                          category: 'DIRECT',    status: 'Active',   logo: LOGOS.rwa,                     brand: `RWA ${BY}` },
  { name: 'DeltaStudy (ScienceAndFun)',        url: 'https://deltastudy.site/scienceandfun',                            category: 'DIRECT',    status: 'Active',   logo: LOGOS.sciencefun,              brand: `ScienceAndFun ${BY}` },
  { name: 'DeltaStudy (Padhle)',               url: 'https://deltastudy.site/padhle',                                   category: 'DIRECT',    status: 'Active',   logo: LOGOS.padhle,                  brand: `Padhle ${BY}` },
  { name: 'DeltaStudy (Sway)',                 url: 'https://deltastudy.site/sway',                                     category: 'DIRECT',    status: 'Active',   logo: LOGOS.sway,                    brand: `Sway ${BY}` },
  { name: 'DeltaStudy (MasterSahab)',          url: 'https://deltastudy.site/mastersahab',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.mastersahab,             brand: `MasterSahab ${BY}` },
  { name: 'DeltaStudy (NexToppers)',           url: 'https://deltastudy.site/nexttoppers',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,              brand: `NextToppers ${BY}` },
  { name: 'DeltaStudy (Mission Jeet)',         url: 'https://deltastudy.site/missionjeet',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet,             brand: `Mission Jeet ${BY}` },
  { name: 'PiPro DeltaStudy',                 url: 'https://pipro.deltastudy.site/',                                   category: 'DIRECT',    status: 'Active',   logo: gf('deltastudy.site'),         brand: `DeltaStudy ${BY}` },
  { name: 'PrimeStudy (Mission Jeet)',         url: 'https://mission-jeet.primestudy.site/missionjeet/',                category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet,             brand: `Mission Jeet ${BY}` },
  { name: 'PrimeStudy (Unacademy)',            url: 'https://unacademy.primestudy.site/',                               category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,               brand: `Unacademy ${BY}` },
  { name: 'PrimeStudy (NextTopper)',           url: 'https://nexttopper.primestudy.site/',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,              brand: `NextToppers ${BY}` },
  { name: 'StudyBee (NextToppers)',            url: 'https://studybeepro.in/nt/',                                       category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,              brand: `NextToppers ${BY}` },
  { name: 'StudyBee (Mission Jeet)',           url: 'https://studybeepro.in/mj/',                                       category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet,             brand: `Mission Jeet ${BY}` },
  { name: 'StudyBee (Unacademy)',              url: 'https://studybeepro.in/unc/',                                      category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,               brand: `Unacademy ${BY}` },
  { name: 'StudyBee (Offline UNC)',            url: 'https://studybeepro.in/of-unc/',                                   category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,               brand: `Unacademy ${BY}` },
  { name: 'StudyBee (SelectionBee)',           url: 'https://studybeepro.in/selectionbee/',                             category: 'DIRECT',    status: 'Active',   logo: gf('studybeepro.in'),          brand: `SelectionBee ${BY}` },
  { name: 'Vibrant Academy (StudyBee)',        url: 'https://vibrantacademy.studybeepro.in/',                           category: 'DIRECT',    status: 'Active',   logo: LOGOS.vibrant,                 brand: `Vibrant Academy ${BY}` },
  { name: 'ASMultiverse',                     url: 'https://asmultiverse.com/',                                        category: 'DIRECT',    status: 'Active',   logo: gf('asmultiverse.com'),        brand: `ASMultiverse ${BY}` },
  { name: 'S3 CDN SamfyGros',                 url: 'https://s3-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: gf('samfygros.com'),           brand: `SamfyGros ${BY}` },
  { name: 'S4 CDN SamfyGros',                 url: 'https://s4-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: gf('samfygros.com'),           brand: `SamfyGros ${BY}` },

  // ── KEY-BASED ────────────────────────────────────────────────────────────
  { name: 'NT StreamFiles (Task Verify)',      url: 'https://nt.streamfiles.eu.org/task-verify.php',                   category: 'KEY-BASED', status: 'Active',   logo: LOGOS.nexttopper,              brand: `NextToppers ${BY}` },
  { name: 'PW Thor',                          url: 'https://pwthor.live/',                                             category: 'KEY-BASED', status: 'Checking', logo: LOGOS.pw,                      brand: `PW ${BY}` },
  { name: 'DeltaStudy (Verify)',               url: 'https://deltastudy.site/verify?next=%2Fstudy-v2%2Fbatches',       category: 'KEY-BASED', status: 'Active',   logo: gf('deltastudy.site'),         brand: `DeltaStudy ${BY}` },
  { name: 'DeltaStudy (Batches)',              url: 'https://deltastudy.site/study-v2/batches',                        category: 'KEY-BASED', status: 'Active',   logo: gf('deltastudy.site'),         brand: `DeltaStudy ${BY}` },

  // ── LOGIN ────────────────────────────────────────────────────────────────
  { name: 'PW ModGalaxy',                     url: 'https://pw.modgalaxy.in/',                                         category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,                      brand: `PW ${BY}` },
  { name: 'PrimeStudy (PW Auth)',              url: 'https://pw.primestudy.site/auth',                                  category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,                      brand: `PW ${BY}` },
  { name: 'StudyBee PW (Auth)',               url: 'https://pw.studybeepro.in/auth',                                   category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,                      brand: `PW ${BY}` },
  { name: 'PrimeStudy (Main)',                 url: 'https://primestudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: gf('primestudy.site'),         brand: `PrimeStudy ${BY}` },
  { name: 'StudyBee Pro (Main)',              url: 'https://studybeepro.in/',                                          category: 'LOGIN',     status: 'Active',   logo: gf('studybeepro.in'),          brand: `StudyBee ${BY}` },
  { name: 'DeltaStudy (Main)',                 url: 'https://deltastudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: gf('deltastudy.site'),         brand: `DeltaStudy ${BY}` },
];
