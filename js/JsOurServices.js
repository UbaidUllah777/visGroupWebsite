const ElheadingInBanner = document.querySelector(".headingInBanner");
const ElserviceParaOne = document.querySelector(".serviceParaOne");
const ElserviceParaTwo = document.querySelector(".serviceParaTwo");
const ElserviceParaThree = document.querySelector(".serviceParaThree");
const ElserviceParaFour = document.querySelector(".serviceParaFour");
const ElserviceImage = document.getElementById("serviceImage");

const clickedServiceId = sessionStorage.getItem("service");

const allServices = [
  // Network Benchmark Testing
  {
    serciceId: "IdNetworkBenchmarkTesting",
    serviceHeading: "Network Benchmark Testing",
    servicePara1:
      "Unleash the power of your Network With Vis Group's multi diamentional Network Benchmark Testing services",
    servicePara2:
      "Every mobile network operator throughout the world invests a huge amount of resources in terms of time and cost to improve and enhance their service quality.  Network benchmarking helps network providers, to evaluate their network performance against their competitors in the market. With a constant demand for new services and better network performance, it is critical that operators have a reliable, accurate, and reproducible way to measure the services provided to their customers and compare themselves against other operators. Our comprehensive benchmarking reports can be used to analyze their performance, identify their weakness, and take measurements to improve furthermore.",
    servicePara3:
      "Network benchmarking is a fundamental necessity for telecom regulators and operators. Regulators have to conduct drive testing in order to monitor the quality of service standards against the KPIs agreed on with the operators, and operators undergo benchmarking activity to do exhaustive analysis, to remain competitive. It is also an effective way of getting to know the competition and gathering valuable information as a source for focused promotional campaigns.",
    servicePara4:
      "We offer among other services, a complete set of network benchmarking services through Field-Testing (Drive and Walk Tests). Drive test is performed in cities, towns, and on roads, while walk test is performed in public areas like airports, shopping malls, etc. For every area, we have weighted scores which will be added to calculate the total score for each operator. As per customer requirements, key performance indicators (KPIs) are decided within the project scope, which determines the team configuration and size. To achieve the desired results and to identify the loopholes in the service quality our Professionals Field Engineers collect the data, which is then analyzed by our radio network experts and presented to the customer in the form of reports against their KPIs.We have successfully performed different drive and walk tests campaigns for various clients in the whole EU, in countries such as Germany, the Netherlands, Sweden, Italy, France, the UK,  UAE, Kuwait, the Kingdom of Saudi Arabia, Qatar, and many more. We use the latest mobile devices, high-end drive test tools, and RF scanners for measurements around the globe.",
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
  // Field Performance Testing
  {
    serciceId: "IdFieldPerformanceTesting",
    serviceHeading: "Field Performance Testing",
    servicePara1: "1st para",
    servicePara2: "2nd para",
    servicePara3: "3rd para",
    servicePara4: "4th Para",
    serviceImage:
      "img/demos/digital-agency-2/our-services/fieldTestingServices.jpg",
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
  //GCF
  {
    serciceId: "IdGlobalCertificationForum",
    serviceHeading: "Global Certification Forum",
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
  //GPS
  {
    serciceId: "IdGPStesting",
    serviceHeading: "G P S Testing",
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
  //Tuner and Media
  {
    serciceId: "IdTunerAndMediaTesting",
    serviceHeading: "Tuner & Media Testing",
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
  //HMI
  {
    serciceId: "IdHMItesting",
    serviceHeading: "H M I Testing",
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
  //Manual Testing
  {
    serciceId: "IdManualTesting",
    serviceHeading: "Manual Testing",
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
  //Automation Testing
  {
    serciceId: "IdAutomationTesting",
    serviceHeading: "Automation Testing",
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
  //Software Development
  {
    serciceId: "IdSoftwareDevelopment",
    serviceHeading: "Software Development",
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

for (singleService of allServices) {
  if (singleService.serciceId === clickedServiceId) {
    if (ElheadingInBanner) {
      ElheadingInBanner.textContent = `${singleService.serviceHeading}`;
      ElserviceParaOne.textContent = `${singleService.servicePara1}`;
      ElserviceParaTwo.textContent = `${singleService.servicePara2}`;
      ElserviceParaThree.textContent = `${singleService.servicePara3}`;
      ElserviceParaFour.textContent = `${singleService.servicePara4}`;
      ElserviceImage.src = `${singleService.serviceImage}`;
    }
  }
}
