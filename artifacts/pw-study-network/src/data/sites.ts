export type SiteCategory = 'DIRECT' | 'KEY-BASED' | 'LOGIN';

export interface Site {
  name: string;
  url: string;
  category: SiteCategory;
  status: 'Active' | 'Checking';
  logo: string; // official brand logo URL
}

// Favicon helper — uses icon.horse (reliable, no auth needed)
const gf = (domain: string) => `https://icon.horse/icon/${domain}`;

export const SITES: Site[] = [
  // ── DIRECT ──────────────────────────────────────────────────────────────
  { name: 'VidCloud',                         url: 'https://vidcloud.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: gf('vidcloud.eu.org') },
  { name: 'StudyRatna',                        url: 'https://studyratna.cc/',                                           category: 'DIRECT',    status: 'Active',   logo: gf('studyratna.cc') },
  { name: 'StudyRays',                         url: 'https://studyrays.cc/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('studyrays.cc') },
  { name: 'VedStudy',                          url: 'https://vedstudy.com/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('vedstudy.com') },
  { name: 'RareStudy',                         url: 'https://rarestudy.in/',                                            category: 'DIRECT',    status: 'Active',   logo: gf('rarestudy.in') },
  { name: 'TestFile',                          url: 'https://testfile.eu.org/',                                         category: 'DIRECT',    status: 'Active',   logo: gf('testfile.eu.org') },
  { name: 'VidyaKool',                         url: 'https://vidyakool.streamfiles.eu.org/',                            category: 'DIRECT',    status: 'Active',   logo: gf('streamfiles.eu.org') },
  { name: 'DeltaStudy (Vibrant)',              url: 'https://deltastudy.site/vibrant',                                  category: 'DIRECT',    status: 'Active',   logo: gf('vibrantacademy.ac.in') },
  { name: 'DeltaStudy (MunilSir)',             url: 'https://deltastudy.site/munilsir',                                 category: 'DIRECT',    status: 'Active',   logo: gf('munilagarwal.com') },
  { name: 'DeltaStudy (Rojgar With Ankit)',    url: 'https://deltastudy.site/rojgarwithankit',                          category: 'DIRECT',    status: 'Active',   logo: gf('rojgarwithankit.in') },
  { name: 'DeltaStudy (ScienceAndFun)',        url: 'https://deltastudy.site/scienceandfun',                            category: 'DIRECT',    status: 'Active',   logo: gf('scienceandfun.in') },
  { name: 'DeltaStudy (Padhle)',               url: 'https://deltastudy.site/padhle',                                   category: 'DIRECT',    status: 'Active',   logo: gf('padhle.com') },
  { name: 'DeltaStudy (Sway)',                 url: 'https://deltastudy.site/sway',                                     category: 'DIRECT',    status: 'Active',   logo: gf('sway.cloud.microsoft') },
  { name: 'DeltaStudy (MasterSahab)',          url: 'https://deltastudy.site/mastersahab',                              category: 'DIRECT',    status: 'Active',   logo: gf('mastersahab.com') },
  { name: 'DeltaStudy (NexToppers)',           url: 'https://deltastudy.site/nexttoppers',                              category: 'DIRECT',    status: 'Active',   logo: gf('nexttoppers.com') },
  { name: 'DeltaStudy (Mission Jeet)',         url: 'https://deltastudy.site/missionjeet',                              category: 'DIRECT',    status: 'Active',   logo: gf('missionjeet.in') },
  { name: 'PiPro DeltaStudy',                 url: 'https://pipro.deltastudy.site/',                                   category: 'DIRECT',    status: 'Active',   logo: gf('deltastudy.site') },
  { name: 'PrimeStudy (Mission Jeet)',         url: 'https://mission-jeet.primestudy.site/missionjeet/',                category: 'DIRECT',    status: 'Active',   logo: gf('missionjeet.in') },
  { name: 'PrimeStudy (Unacademy)',            url: 'https://unacademy.primestudy.site/',                               category: 'DIRECT',    status: 'Active',   logo: gf('unacademy.com') },
  { name: 'PrimeStudy (NextTopper)',           url: 'https://nexttopper.primestudy.site/',                              category: 'DIRECT',    status: 'Active',   logo: gf('nexttoppers.com') },
  { name: 'StudyBee (NextToppers)',            url: 'https://studybeepro.in/nt/',                                       category: 'DIRECT',    status: 'Active',   logo: gf('nexttoppers.com') },
  { name: 'StudyBee (Mission Jeet)',           url: 'https://studybeepro.in/mj/',                                       category: 'DIRECT',    status: 'Active',   logo: gf('missionjeet.in') },
  { name: 'StudyBee (Unacademy)',              url: 'https://studybeepro.in/unc/',                                      category: 'DIRECT',    status: 'Active',   logo: gf('unacademy.com') },
  { name: 'StudyBee (Offline UNC)',            url: 'https://studybeepro.in/of-unc/',                                   category: 'DIRECT',    status: 'Active',   logo: gf('unacademy.com') },
  { name: 'StudyBee (SelectionBee)',           url: 'https://studybeepro.in/selectionbee/',                             category: 'DIRECT',    status: 'Active',   logo: gf('studybeepro.in') },
  { name: 'Vibrant Academy (StudyBee)',        url: 'https://vibrantacademy.studybeepro.in/',                           category: 'DIRECT',    status: 'Active',   logo: gf('vibrantacademy.ac.in') },
  { name: 'ASMultiverse',                     url: 'https://asmultiverse.com/',                                        category: 'DIRECT',    status: 'Active',   logo: gf('asmultiverse.com') },
  { name: 'S3 CDN SamfyGros',                 url: 'https://s3-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: gf('samfygros.com') },
  { name: 'S4 CDN SamfyGros',                 url: 'https://s4-cdn.samfygros.com/',                                    category: 'DIRECT',    status: 'Active',   logo: gf('samfygros.com') },

  // ── KEY-BASED ────────────────────────────────────────────────────────────
  { name: 'NT StreamFiles (Task Verify)',      url: 'https://nt.streamfiles.eu.org/task-verify.php',                   category: 'KEY-BASED', status: 'Active',   logo: gf('nexttoppers.com') },
  { name: 'PW Thor',                          url: 'https://pwthor.live/',                                             category: 'KEY-BASED', status: 'Checking', logo: gf('pw.live') },
  { name: 'DeltaStudy (Verify)',               url: 'https://deltastudy.site/verify?next=%2Fstudy-v2%2Fbatches',       category: 'KEY-BASED', status: 'Active',   logo: gf('deltastudy.site') },
  { name: 'DeltaStudy (Batches)',              url: 'https://deltastudy.site/study-v2/batches',                        category: 'KEY-BASED', status: 'Active',   logo: gf('deltastudy.site') },

  // ── LOGIN ────────────────────────────────────────────────────────────────
  { name: 'PW ModGalaxy',                     url: 'https://pw.modgalaxy.in/',                                         category: 'LOGIN',     status: 'Active',   logo: gf('pw.live') },
  { name: 'PrimeStudy (PW Auth)',              url: 'https://pw.primestudy.site/auth',                                  category: 'LOGIN',     status: 'Active',   logo: gf('pw.live') },
  { name: 'StudyBee PW (Auth)',               url: 'https://pw.studybeepro.in/auth',                                   category: 'LOGIN',     status: 'Active',   logo: gf('pw.live') },
  { name: 'PrimeStudy (Main)',                 url: 'https://primestudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: gf('primestudy.site') },
  { name: 'StudyBee Pro (Main)',              url: 'https://studybeepro.in/',                                          category: 'LOGIN',     status: 'Active',   logo: gf('studybeepro.in') },
  { name: 'DeltaStudy (Main)',                 url: 'https://deltastudy.site/',                                         category: 'LOGIN',     status: 'Active',   logo: gf('deltastudy.site') },
];
