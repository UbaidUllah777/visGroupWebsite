const ElcontNetworkBenchmarkTesting = document.getElementById(
  "contNetworkBenchmarkTesting"
);
const ElcontFieldPerformanceTesting = document.getElementById(
  "contFieldPerformanceTesting"
);
const ElcontGlobalCertificationForum = document.getElementById(
  "contGlobalCertificationForum"
);
const ElcontGPStesting = document.getElementById("contGPStesting");
const ElcontTunerAndMediaTesting = document.getElementById(
  "contTunerAndMediaTesting"
);
const ELcontHMItesting = document.getElementById("contHMItesting");
const ElcontManualTesting = document.getElementById("contManualTesting");
const ElcontAutomationTesting = document.getElementById(
  "contAutomationTesting"
);
const ElcontSoftwareDevelopment = document.getElementById(
  "contSoftwareDevelopment"
);

if (sessionStorage.getItem("service")) {
  const ClickedService = sessionStorage.getItem("service");

  if (ClickedService === "IdNetworkBenchmarkTesting") {
    ElcontNetworkBenchmarkTesting.classList = ``;
    ElcontNetworkBenchmarkTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdFieldPerformanceTesting") {
    ElcontFieldPerformanceTesting.classList = ``;
    ElcontFieldPerformanceTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdGlobalCertificationForum") {
    ElcontGlobalCertificationForum.classList = ``;
    ElcontGlobalCertificationForum.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdGPStesting") {
    ElcontGPStesting.classList = ``;
    ElcontGPStesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdTunerAndMediaTesting") {
    ElcontTunerAndMediaTesting.classList = ``;
    ElcontTunerAndMediaTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdHMItesting") {
    ELcontHMItesting.classList = ``;
    ELcontHMItesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdManualTesting") {
    ElcontManualTesting.classList = ``;
    ElcontManualTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdAutomationTesting") {
    ElcontAutomationTesting.classList = ``;
    ElcontAutomationTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else if (ClickedService === "IdSoftwareDevelopment") {
    ElcontSoftwareDevelopment.classList = ``;
    ElcontSoftwareDevelopment.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  } else {
    ElcontNetworkBenchmarkTesting.classList = ``;
    ElcontNetworkBenchmarkTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
  }
} else {
  ElcontNetworkBenchmarkTesting.classList = ``;
  ElcontNetworkBenchmarkTesting.classList = `service-card active ps-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative`;
}
