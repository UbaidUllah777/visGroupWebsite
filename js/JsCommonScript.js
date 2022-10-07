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

const FnSetServiceId = (serciceId) => {
  sessionStorage.setItem("service", serciceId);
};

ElLinkcontactUs.textContent = `Contact Us`;
ElLinkImprint.textContent = `Imprint`;
ElLinkBlog.textContent = `Blog`;
ElLinkPrivacyPolicy.textContent = `Privacy Policy`;

ElAddGermanyHeading.textContent = `Germany`;
ElAddGerStreet.textContent = `Hansa Str 03, Duisburg, 47058, NRW`;
ElAddGerCompany.textContent = `Vision PS GmbH`;
ElAddGerPhone.textContent = `+4920334689340`;
ElAddGerEmail.textContent = `info@vision-ps.de`;

ElAddOtherLocationsHead.textContent = `Dubai`;
ElAddOtherLoc1.textContent = `Romania`;
ElAddOtherLoc2.textContent = `United Kingdom`;
ElAddOtherLoc3.textContent = `UAE`;
ElAddOtherLoc4.textContent = `Pakistan`;
ElAddOtherLoc5.textContent = `Bahrain`;

ElCopyRight.textContent = `Vis Group © 2022. All Rights Reserved`;
