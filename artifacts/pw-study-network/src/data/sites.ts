export type SiteCategory = 'DIRECT' | 'KEY-BASED' | 'LOGIN';

export interface Site {
  name: string;
  url: string;
  category: SiteCategory;
  status: 'Active' | 'Checking';
}

export const SITES: Site[] = [
  // DIRECT
  { name: 'VidCloud', url: 'https://vidcloud.eu.org/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyRatna', url: 'https://studyratna.cc/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyRays', url: 'https://studyrays.cc/', category: 'DIRECT', status: 'Active' },
  { name: 'VedStudy', url: 'https://vedstudy.com/', category: 'DIRECT', status: 'Active' },
  { name: 'RareStudy', url: 'https://rarestudy.in/', category: 'DIRECT', status: 'Active' },
  { name: 'TestFile', url: 'https://testfile.eu.org/', category: 'DIRECT', status: 'Active' },
  { name: 'VidyaKool', url: 'https://vidyakool.streamfiles.eu.org/', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (Vibrant)', url: 'https://deltastudy.site/vibrant', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (MunilSir)', url: 'https://deltastudy.site/munilsir', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (Rojgar With Ankit)', url: 'https://deltastudy.site/rojgarwithankit', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (ScienceAndFun)', url: 'https://deltastudy.site/scienceandfun', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (Padhle)', url: 'https://deltastudy.site/padhle', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (Sway)', url: 'https://deltastudy.site/sway', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (MasterSahab)', url: 'https://deltastudy.site/mastersahab', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (NexToppers)', url: 'https://deltastudy.site/nexttoppers', category: 'DIRECT', status: 'Active' },
  { name: 'DeltaStudy (Mission Jeet)', url: 'https://deltastudy.site/missionjeet', category: 'DIRECT', status: 'Active' },
  { name: 'PiPro DeltaStudy', url: 'https://pipro.deltastudy.site/', category: 'DIRECT', status: 'Active' },
  { name: 'PrimeStudy (Mission Jeet)', url: 'https://mission-jeet.primestudy.site/missionjeet/', category: 'DIRECT', status: 'Active' },
  { name: 'PrimeStudy (Unacademy)', url: 'https://unacademy.primestudy.site/', category: 'DIRECT', status: 'Active' },
  { name: 'PrimeStudy (NextTopper)', url: 'https://nexttopper.primestudy.site/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyBee (NextToppers)', url: 'https://studybeepro.in/nt/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyBee (Mission Jeet)', url: 'https://studybeepro.in/mj/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyBee (Unacademy)', url: 'https://studybeepro.in/unc/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyBee (Offline UNC)', url: 'https://studybeepro.in/of-unc/', category: 'DIRECT', status: 'Active' },
  { name: 'StudyBee (SelectionBee)', url: 'https://studybeepro.in/selectionbee/', category: 'DIRECT', status: 'Active' },
  { name: 'Vibrant Academy (StudyBee)', url: 'https://vibrantacademy.studybeepro.in/', category: 'DIRECT', status: 'Active' },
  { name: 'ASMultiverse', url: 'https://asmultiverse.com/', category: 'DIRECT', status: 'Active' },
  { name: 'S3 CDN SamfyGros', url: 'https://s3-cdn.samfygros.com/', category: 'DIRECT', status: 'Active' },
  { name: 'S4 CDN SamfyGros', url: 'https://s4-cdn.samfygros.com/', category: 'DIRECT', status: 'Active' },

  // KEY-BASED
  { name: 'NT StreamFiles (Task Verify)', url: 'https://nt.streamfiles.eu.org/task-verify.php', category: 'KEY-BASED', status: 'Active' },
  { name: 'PW Thor', url: 'https://pwthor.live/', category: 'KEY-BASED', status: 'Checking' },
  { name: 'DeltaStudy (Verify)', url: 'https://deltastudy.site/verify?next=%2Fstudy-v2%2Fbatches', category: 'KEY-BASED', status: 'Active' },
  { name: 'DeltaStudy (Batches)', url: 'https://deltastudy.site/study-v2/batches', category: 'KEY-BASED', status: 'Active' },

  // LOGIN
  { name: 'PW ModGalaxy', url: 'https://pw.modgalaxy.in/', category: 'LOGIN', status: 'Active' },
  { name: 'PrimeStudy (PW Auth)', url: 'https://pw.primestudy.site/auth', category: 'LOGIN', status: 'Active' },
  { name: 'StudyBee PW (Auth)', url: 'https://pw.studybeepro.in/auth', category: 'LOGIN', status: 'Active' },
  { name: 'PrimeStudy (Main)', url: 'https://primestudy.site/', category: 'LOGIN', status: 'Active' },
  { name: 'StudyBee Pro (Main)', url: 'https://studybeepro.in/', category: 'LOGIN', status: 'Active' },
  { name: 'DeltaStudy (Main)', url: 'https://deltastudy.site/', category: 'LOGIN', status: 'Active' },
];
