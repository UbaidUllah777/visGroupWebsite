const ElheadingInBanner = document.querySelector(".headingInBanner");
const clickedServiceId = sessionStorage.getItem("service Id");

const allServices = [
  {
    serciceId: "IdNetworkBenchmarkTesting",
    serviceHeading: "Network Benchmark Testing",
    servicePara1:
      "Paragaraph One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus ante. Nam suscipit urna risus.",
    servicePara2:
      "Paragaraph Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa quam. Maecenas et sem accumsan, dictum arcu eu, consectetur eros. Nulla tortor est, lobortis vestibulum turpis sed, mollis commodo orci.",
    servicePara3:
      "Paragaraph Three Sed elementum cursus ante in suscipit. Etiam a arcu consequat, vehicula nisi in, efficitur lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eu lectus ultricies, pellentesque libero vitae, dictum erat",
    servicePara4:
      "Paragaraph Four Sed elementum cursus ante in suscipit. Etiam a arcu consequat, vehicula nisi in, efficitur lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eu lectus ultricies, pellentesque libero vitae, dictum erat.",
    serviceImage:
      "img/demos/digital-agency-2/our-services/our-services-detail-1.jpeg",
    sercicetagLines: [
      {
        tag1: "tag Line One",
        tag2: "tagLine Two",
        tag3: "TagLine Three",
      },
    ],
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  {
    serciceId: "Field Performance Testing",
    serviceHeading: "",
    servicePara1: "",
    servicePara2: "",
    servicePara3: "",
    servicePara4: "",
    serviceImage: "",
    sercicetagLines: [
      {
        tag1: "tag Line One",
        tag2: "tagLine Two",
        tag3: "TagLine Three",
      },
    ],
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  {
    serciceId: "IdFieldPerformanceTesting",
    serviceHeading: "",
    servicePara1: "",
    servicePara2: "",
    servicePara3: "",
    servicePara4: "",
    serviceImage: "",
    sercicetagLines: [
      {
        tag1: "tag Line One",
        tag2: "tagLine Two",
        tag3: "TagLine Three",
      },
    ],
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
];

for (const singleService in allServices) {
  if (singleService.serciceId === clickedServiceId) {
    console.log(singleService.serciceId);
  }
}
