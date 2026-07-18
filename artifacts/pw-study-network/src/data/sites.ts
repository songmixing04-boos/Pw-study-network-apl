// @ts-ignore — Vite handles image imports
import pwNetworkLogo from '@assets/file_0000000069e471fdaef8c809135c7464_1784356090795.png';

export type SiteCategory = 'DIRECT' | 'KEY-BASED' | 'LOGIN';

export type PlatformGroup =
  | 'PW'
  | 'RWA'
  | 'NEXTTOPPERS'
  | 'UNACADEMY'
  | 'VIBRANT'
  | 'MISSIONJEET'
  | 'PADHLE'
  | 'MASTERSAHAB'
  | 'MUNIL'
  | 'SCIENCEFUN'
  | 'SWAY'
  | 'OTHERS';

export interface Site {
  name: string;
  url: string;
  category: SiteCategory;
  status: 'Active' | 'Checking';
  logo: string;
  brand: string;
  platformGroup: PlatformGroup;
  powerful?: boolean;        // 🔥 "Most Powerful" ribbon
  availableFrom?: string;    // e.g. "1 August 2026" — coming soon label
}

export interface PlatformMeta {
  label: string;
  sublabel: string;
  logo: string;
  color: string; // accent color for the section header
}

// Route through our API proxy so logos load in all environments
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const gf = (domain: string) => `${BASE}/api/logo?domain=${domain}`;

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

export const PLATFORM_META: Record<PlatformGroup, PlatformMeta> = {
  PW:          { label: 'Physics Wallah',      sublabel: 'PW by Ankit Chaudhary',          logo: LOGOS.pw,          color: '#e64c1f' },
  RWA:         { label: 'Rojgar With Ankit',   sublabel: 'RWA by Ankit Chaudhary',         logo: LOGOS.rwa,         color: '#e6a81f' },
  NEXTTOPPERS: { label: 'NextToppers',         sublabel: 'NextToppers by Ankit Chaudhary', logo: LOGOS.nexttopper,  color: '#00c896' },
  UNACADEMY:   { label: 'Unacademy',           sublabel: 'Unacademy by Ankit Chaudhary',   logo: LOGOS.unacademy,   color: '#08bd80' },
  VIBRANT:     { label: 'Vibrant Academy',     sublabel: 'Vibrant by Ankit Chaudhary',     logo: LOGOS.vibrant,     color: '#e63b2f' },
  MISSIONJEET: { label: 'Mission Jeet',        sublabel: 'Mission Jeet by Ankit Chaudhary',logo: LOGOS.missionjeet, color: '#f5a623' },
  PADHLE:      { label: 'Padhle',              sublabel: 'Padhle by Ankit Chaudhary',      logo: LOGOS.padhle,      color: '#f5c518' },
  MASTERSAHAB: { label: 'MasterSahab',         sublabel: 'MasterSahab by Ankit Chaudhary', logo: LOGOS.mastersahab, color: '#1a6fbf' },
  MUNIL:       { label: 'MunilSir',            sublabel: 'MunilSir by Ankit Chaudhary',    logo: pwNetworkLogo,     color: '#9b59b6' },
  SCIENCEFUN:  { label: 'ScienceAndFun',       sublabel: 'ScienceAndFun by Ankit Chaudhary',logo: pwNetworkLogo,   color: '#27ae60' },
  SWAY:        { label: 'Sway',                sublabel: 'Sway by Ankit Chaudhary',        logo: pwNetworkLogo,     color: '#0078d4' },
  OTHERS:      { label: 'Other Platforms',     sublabel: 'by Ankit Chaudhary',             logo: pwNetworkLogo,      color: '#D4A017' },
};

export const PLATFORM_ORDER: PlatformGroup[] = [
  'PW', 'RWA', 'NEXTTOPPERS', 'UNACADEMY', 'VIBRANT',
  'MISSIONJEET', 'PADHLE', 'MASTERSAHAB', 'MUNIL', 'SCIENCEFUN', 'SWAY', 'OTHERS',
];

export const SITES: Site[] = [
  // ── PW ──────────────────────────────────────────────────────────────────
  { name: 'PW Thor',                          url: 'https://pwthor.live/',                                             category: 'KEY-BASED', status: 'Checking', logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'PW ModGalaxy',                     url: 'https://pw.modgalaxy.in/',                                         category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'PrimeStudy (PW Auth)',              url: 'https://pw.primestudy.site/auth',                                  category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'StudyBee PW (Auth)',               url: 'https://pw.studybeepro.in/auth',                                   category: 'LOGIN',     status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'VidCloud',                         url: 'https://vidcloud.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'StudyRatna',                        url: 'https://studyratna.cc/',                                           category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'StudyRays',                         url: 'https://studyrays.cc/',                                            category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW', powerful: true },
  { name: 'VedStudy',                          url: 'https://vedstudy.com/',                                            category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'RareStudy',                         url: 'https://rarestudy.in/',                                            category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'ASMultiverse',                     url: 'https://asmultiverse.com/',                                        category: 'DIRECT',    status: 'Active',   logo: LOGOS.pw,          brand: `PW ${BY}`,            platformGroup: 'PW' },
  { name: 'PW Study Network (Official)',       url: 'https://pw-study-network-by-ankit.vercel.app/',                   category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,     brand: `PW ${BY}`,            platformGroup: 'PW', powerful: true, availableFrom: '1 August 2026' },

  // ── RWA ─────────────────────────────────────────────────────────────────
  { name: 'DeltaStudy (Rojgar With Ankit)',    url: 'https://deltastudy.site/rojgarwithankit',                          category: 'DIRECT',    status: 'Active',   logo: LOGOS.rwa,         brand: `RWA ${BY}`,           platformGroup: 'RWA' },

  // ── NEXTTOPPERS ─────────────────────────────────────────────────────────
  { name: 'NT StreamFiles (Task Verify)',      url: 'https://nt.streamfiles.eu.org/task-verify.php',                   category: 'KEY-BASED', status: 'Active',   logo: LOGOS.nexttopper,  brand: `NextToppers ${BY}`,   platformGroup: 'NEXTTOPPERS' },
  { name: 'DeltaStudy (NexToppers)',           url: 'https://deltastudy.site/nexttoppers',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,  brand: `NextToppers ${BY}`,   platformGroup: 'NEXTTOPPERS' },
  { name: 'PrimeStudy (NextTopper)',           url: 'https://nexttopper.primestudy.site/',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,  brand: `NextToppers ${BY}`,   platformGroup: 'NEXTTOPPERS' },
  { name: 'StudyBee (NextToppers)',            url: 'https://studybeepro.in/nt/',                                       category: 'DIRECT',    status: 'Active',   logo: LOGOS.nexttopper,  brand: `NextToppers ${BY}`,   platformGroup: 'NEXTTOPPERS' },

  // ── UNACADEMY ───────────────────────────────────────────────────────────
  { name: 'PrimeStudy (Unacademy)',            url: 'https://unacademy.primestudy.site/',                               category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,   brand: `Unacademy ${BY}`,     platformGroup: 'UNACADEMY' },
  { name: 'StudyBee (Unacademy)',              url: 'https://studybeepro.in/unc/',                                      category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,   brand: `Unacademy ${BY}`,     platformGroup: 'UNACADEMY' },
  { name: 'StudyBee (Offline UNC)',            url: 'https://studybeepro.in/of-unc/',                                   category: 'DIRECT',    status: 'Active',   logo: LOGOS.unacademy,   brand: `Unacademy ${BY}`,     platformGroup: 'UNACADEMY' },

  // ── VIBRANT ─────────────────────────────────────────────────────────────
  { name: 'DeltaStudy (Vibrant)',              url: 'https://deltastudy.site/vibrant',                                  category: 'DIRECT',    status: 'Active',   logo: LOGOS.vibrant,     brand: `Vibrant Academy ${BY}`, platformGroup: 'VIBRANT' },
  { name: 'Vibrant Academy (StudyBee)',        url: 'https://vibrantacademy.studybeepro.in/',                           category: 'DIRECT',    status: 'Active',   logo: LOGOS.vibrant,     brand: `Vibrant Academy ${BY}`, platformGroup: 'VIBRANT' },

  // ── MISSION JEET ────────────────────────────────────────────────────────
  { name: 'DeltaStudy (Mission Jeet)',         url: 'https://deltastudy.site/missionjeet',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet, brand: `Mission Jeet ${BY}`,  platformGroup: 'MISSIONJEET' },
  { name: 'PrimeStudy (Mission Jeet)',         url: 'https://mission-jeet.primestudy.site/missionjeet/',                category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet, brand: `Mission Jeet ${BY}`,  platformGroup: 'MISSIONJEET' },
  { name: 'StudyBee (Mission Jeet)',           url: 'https://studybeepro.in/mj/',                                       category: 'DIRECT',    status: 'Active',   logo: LOGOS.missionjeet, brand: `Mission Jeet ${BY}`,  platformGroup: 'MISSIONJEET' },

  // ── PADHLE ──────────────────────────────────────────────────────────────
  { name: 'DeltaStudy (Padhle)',               url: 'https://deltastudy.site/padhle',                                   category: 'DIRECT',    status: 'Active',   logo: LOGOS.padhle,      brand: `Padhle ${BY}`,        platformGroup: 'PADHLE' },

  // ── MASTERSAHAB ─────────────────────────────────────────────────────────
  { name: 'DeltaStudy (MasterSahab)',          url: 'https://deltastudy.site/mastersahab',                              category: 'DIRECT',    status: 'Active',   logo: LOGOS.mastersahab, brand: `MasterSahab ${BY}`,   platformGroup: 'MASTERSAHAB' },

  // ── MUNIL ───────────────────────────────────────────────────────────────
  { name: 'DeltaStudy (MunilSir)',             url: 'https://deltastudy.site/munilsir',                                 category: 'DIRECT',    status: 'Active',   logo: LOGOS.munil,       brand: `MunilSir ${BY}`,      platformGroup: 'MUNIL' },

  // ── SCIENCEFUN ──────────────────────────────────────────────────────────
  { name: 'DeltaStudy (ScienceAndFun)',        url: 'https://deltastudy.site/scienceandfun',                            category: 'DIRECT',    status: 'Active',   logo: LOGOS.sciencefun,  brand: `ScienceAndFun ${BY}`, platformGroup: 'SCIENCEFUN' },

  // ── SWAY ────────────────────────────────────────────────────────────────
  { name: 'DeltaStudy (Sway)',                 url: 'https://deltastudy.site/sway',                                     category: 'DIRECT',    status: 'Active',   logo: LOGOS.sway,        brand: `Sway ${BY}`,          platformGroup: 'SWAY' },

  // ── OTHERS ──────────────────────────────────────────────────────────────
  { name: 'TestFile',                          url: 'https://testfile.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `TestFile ${BY}`,      platformGroup: 'OTHERS' },
  { name: 'VidyaKool',                         url: 'https://vidyakool.streamfiles.eu.org/',                            category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `VidyaKool ${BY}`,     platformGroup: 'OTHERS' },
  { name: 'PiPro DeltaStudy',                 url: 'https://pipro.deltastudy.site/',                                   category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `DeltaStudy ${BY}`,    platformGroup: 'OTHERS' },
  { name: 'StudyBee (SelectionBee)',           url: 'https://studybeepro.in/selectionbee/',                             category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `SelectionBee ${BY}`,  platformGroup: 'OTHERS' },
  { name: 'S3 CDN SamfyGros',                 url: 'https://s3-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `SamfyGros ${BY}`,     platformGroup: 'OTHERS' },
  { name: 'S4 CDN SamfyGros',                 url: 'https://s4-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: pwNetworkLogo,                brand: `SamfyGros ${BY}`,     platformGroup: 'OTHERS' },
  { name: 'DeltaStudy (Verify)',               url: 'https://deltastudy.site/verify?next=%2Fstudy-v2%2Fbatches',       category: 'KEY-BASED', status: 'Active',   logo: pwNetworkLogo,                brand: `DeltaStudy ${BY}`,    platformGroup: 'OTHERS' },
  { name: 'DeltaStudy (Batches)',              url: 'https://deltastudy.site/study-v2/batches',                        category: 'KEY-BASED', status: 'Active',   logo: pwNetworkLogo,                brand: `DeltaStudy ${BY}`,    platformGroup: 'OTHERS' },
  { name: 'PrimeStudy (Main)',                 url: 'https://primestudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: pwNetworkLogo,                brand: `PrimeStudy ${BY}`,    platformGroup: 'OTHERS' },
  { name: 'StudyBee Pro (Main)',              url: 'https://studybeepro.in/',                                          category: 'LOGIN',     status: 'Active',   logo: pwNetworkLogo,                brand: `StudyBee ${BY}`,      platformGroup: 'OTHERS' },
  { name: 'DeltaStudy (Main)',                 url: 'https://deltastudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: pwNetworkLogo,                brand: `DeltaStudy ${BY}`,    platformGroup: 'OTHERS' },
];
