//Navbar :Start

const ElidVisLogo = document.getElementById("idVisLogo");
const ElidHeadLinkHome = document.getElementById("idHeadLinkHome");
const ElidHeadLinkAboutUs = document.getElementById("idHeadLinkAboutUs");
const ElidHeadLinkOurServices = document.getElementById(
  "idHeadLinkOurServices"
);
const ElidHeadLinkServOverview = document.getElementById(
  "idHeadLinkServOverview"
);
const ElIdNetworkBenchmarkTesting = document.getElementById(
  "IdNetworkBenchmarkTesting"
);
const ElIdFieldPerformanceTesting = document.getElementById(
  "IdFieldPerformanceTesting"
);
const ElIdGlobalCertificationForum = document.getElementById(
  "IdGlobalCertificationForum"
);
const ElIdGPStesting = document.getElementById("IdGPStesting");
const ElIdTunerAndMediaTesting = document.getElementById(
  "IdTunerAndMediaTesting"
);
const ElIdHMItesting = document.getElementById("IdHMItesting");
const ElIdManualTesting = document.getElementById("IdManualTesting");
const ElIdAutomationTesting = document.getElementById("IdAutomationTesting");
const ElIdSoftwareDevelopment = document.getElementById(
  "IdSoftwareDevelopment"
);
const ElidHeadLinkOurWork = document.getElementById("idHeadLinkOurWork");
const ElidHeadLinkVisGroup = document.getElementById("idHeadLinkVisGroup");
const ElIdVisonprofessionalServices = document.getElementById(
  "IdVisonprofessionalServices"
);
const ElIdViscomEngineeringServices = document.getElementById(
  "IdViscomEngineeringServices"
);
const ElMafaheemTechnologies = document.getElementById(
  "IdAlMafaheemTechnologies"
);
const ElIdPerformEngineeringServices = document.getElementById(
  "IdPerformEngineeringServices"
);
const ElIdBrainTimeProfesionalServices = document.getElementById(
  "IdBrainTimeProfesionalServices"
);
const ElIdBXTechnologies = document.getElementById("IdBXTechnologies");
const ElIdVisEducationServices = document.getElementById(
  "IdVisEducationServices"
);
const ElidHeadLinkContactUs = document.getElementById("idHeadLinkContactUs");
const ElidHeadLinkInstagram = document.getElementById("idHeadLinkInstagram");
const ElidHeadLinkTwitter = document.getElementById("idHeadLinkTwitter");
const ElidHeadLinkFacebook = document.getElementById("idHeadLinkFacebook");

//Navbar :End

//Footer Links :Start
const ElLinkcontactUs = document.getElementById("idLinkContactus");
const ElLinkBlog = document.getElementById("idLinkBlog");
const ElLinkImprint = document.getElementById("idLinkImprint");
const ElLinkPrivacyPolicy = document.getElementById("idLinkPrivacyPolicy");
const ElAddGermanyHeading = document.getElementById("idAddressGermanyHeading");
const ElAddGerStreet = document.getElementById("idAddGerST");
const ElAddGerCompany = document.getElementById("idAddGerCompanyName");
const ElAddGerPhone = document.getElementById("idAddGerPhone");
const ElAddGerEmail = document.getElementById("idAddGerEmail");
const ElAddOtherLocationsHead = document.getElementById("idOtherLocHeading");
const ElAddOtherLoc1 = document.getElementById("idAddOther1");
const ElAddOtherLoc2 = document.getElementById("idAddOther2");
const ElAddOtherLoc3 = document.getElementById("idAddOther3");
const ElAddOtherLoc4 = document.getElementById("idAddOther4");
const ElAddOtherLoc5 = document.getElementById("idAddOther5");
const ElCopyRight = document.getElementById("idCopyRight");
//Footer Links :End

const FnSetServiceId = (serciceId) => {
  sessionStorage.setItem("service", serciceId);
};

//Rendering Header Navbar Elements :Start
ElidVisLogo.src = `img/demos/digital-agency-2/logos/logo-1.gif`;
ElidVisLogo.width = `139`;
ElidVisLogo.height = `59`;
ElidVisLogo.href = `index.html`;

ElidHeadLinkHome.textContent = `Home`;
ElidHeadLinkHome.href = `index.html`;

ElidHeadLinkAboutUs.textContent = `About Us`;
ElidHeadLinkAboutUs.href = `aboutUs.html`;

ElidHeadLinkOurServices.textContent = `Our Services`;
ElidHeadLinkOurServices.href = `ourServices.html`;

ElidHeadLinkServOverview.textContent = `Overview`;
ElidHeadLinkServOverview.href = `ourServices.html`;

ElIdNetworkBenchmarkTesting.textContent = `Network Benchmark Testing`;
ElIdNetworkBenchmarkTesting.href = `ourServices-detail.html`;

ElIdFieldPerformanceTesting.textContent = `Field Performance Testing`;
ElIdFieldPerformanceTesting.href = `ourServices-detail.html`;

ElIdGlobalCertificationForum.textContent = `Global Certification Forum`;
ElIdGlobalCertificationForum.href = `ourServices-detail.html`;

ElIdGPStesting.textContent = `GPS Testing`;
ElIdGPStesting.href = `ourServices-detail.html`;

ElIdTunerAndMediaTesting.textContent = `Tuner & Media System Testing`;
ElIdTunerAndMediaTesting.href = `ourServices-detail.html`;

ElIdHMItesting.textContent = ` HMI Testing`;
ElIdHMItesting.href = `ourServices-detail.html`;

ElIdManualTesting.textContent = `Manual Testing`;
ElIdManualTesting.href = `ourServices-detail.html`;

ElIdAutomationTesting.textContent = `Automation Testing`;
ElIdAutomationTesting.href = `ourServices-detail.html`;

ElIdSoftwareDevelopment.textContent = `Software Development`;
ElIdSoftwareDevelopment.href = `ourServices-detail.html`;

ElidHeadLinkOurWork.textContent = `Our Work`;
ElidHeadLinkOurWork.href = `ourWork.html`;

ElidHeadLinkVisGroup.textContent = `Vis-Group`;
ElidHeadLinkVisGroup.href = `#`;

ElIdVisonprofessionalServices.textContent = `Vison professional Services`;
ElIdVisonprofessionalServices.href = `https://www.vision-ps.de/`;

ElIdViscomEngineeringServices.textContent = `Viscom Engineering Services`;
ElIdViscomEngineeringServices.href = `https://www.viscom-es.com/`;

ElMafaheemTechnologies.textContent = `Al-Mafaheem Technologies`;
ElMafaheemTechnologies.href = `https://mafaheem-tech.com/`;

ElIdPerformEngineeringServices.textContent = `Perform Engineering Services`;
ElIdPerformEngineeringServices.href = `https://perform-es.com/`;

ElIdBrainTimeProfesionalServices.textContent = `BrainTime Profesional Services`;
ElIdBrainTimeProfesionalServices.href = `https://braintime-tech.com/`;

ElIdBXTechnologies.textContent = `BX Technologies`;
ElIdBXTechnologies.href = `http://bxtechnologies.net/`;

ElIdVisEducationServices.textContent = `Vis Education Services`;
ElIdVisEducationServices.href = `#`;

ElidHeadLinkContactUs.textContent = `Contact Us`;
ElidHeadLinkContactUs.href = `contactUs.html`;

ElidHeadLinkInstagram.href = `http://www.instagram.com/`;

ElidHeadLinkTwitter.href = `http://www.twitter.com/`;

ElidHeadLinkFacebook.href = `http://www.facebook.com/`;

//Rendering Header Navbar Elements :End

//Rendering Footer Elements: Start
ElLinkcontactUs.textContent = `Contact Us`;
ElLinkImprint.textContent = `Imprint`;
ElLinkBlog.textContent = `Blog`;
ElLinkPrivacyPolicy.textContent = `Privacy Policy`;

ElAddGermanyHeading.textContent = `Germany`;
ElAddGerStreet.textContent = `Hansa Str 03, Duisburg, 47058, NRW`;
ElAddGerCompany.textContent = `Vision PS GmbH`;
ElAddGerPhone.textContent = `+4920334689340`;
ElAddGerEmail.textContent = `info@vision-ps.de`;

ElAddOtherLocationsHead.textContent = `Other Locations`;
ElAddOtherLoc1.textContent = `Romania`;
ElAddOtherLoc2.textContent = `United Kingdom`;
ElAddOtherLoc3.textContent = `UAE`;
ElAddOtherLoc4.textContent = `Pakistan`;
ElAddOtherLoc5.textContent = `Bahrain`;

ElCopyRight.textContent = `Vis Group © 2022. All Rights Reserved`;

//Rendering Footer Elements: End
