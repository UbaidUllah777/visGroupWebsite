const ElheadingInBanner = document.querySelector(".headingInBanner");
const ElserviceParaOne = document.querySelector(".serviceParaOne");
const ElserviceParaTwo = document.querySelector(".serviceParaTwo");
const ElserviceParaThree = document.querySelector(".serviceParaThree");
const ElserviceParaFour = document.querySelector(".serviceParaFour");
const ElserviceImage = document.getElementById("serviceImage");
const ElserviceTag1 = document.getElementById("serviceTag1");
const ElserviceTag2 = document.getElementById("serviceTag2");
const ElserviceTag3 = document.getElementById("serviceTag3");

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
      "img/demos/digital-agency-2/our-services/our-services-detail-1.jpg",

    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",

    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  // Field Performance Testing
  {
    serciceId: "IdFieldPerformanceTesting",
    serviceHeading: "Field Performance Testing",
    servicePara1:
      "Improve and Enhance your Network, Service Quality and Operations with our Feild Performance Testing Services",
    servicePara2:
      "Mobile device Field Testing is critical for the success of any handset launched in the market. Mobile device field testing is considered a significant parameter in assessing the performance, software quality, reliability, and overall stability of the mobile phone. We use proven testing methods to validate 2G, 3G, and 4G mobile devices on live networks. Mobile phone field Testing is carried out on a wide range of commercial network operators to assess the performance and behavior of a mobile phone. Vis Group offers global Field Testing, with test reports and maturity statements. Our end-to-end services include executing customized research and development (R&D) testing plans and operator-specific Field Testing in various markets. Our team of mobile field testing engineers and experts is positioned around the globe to write test cases according to requirements and run them in the required areas.",
    servicePara3:
      "We have experience with multiple mobile platforms and operators to support device flashing, logging, troubleshooting, and reporting on real-time defect management. We have expertise in testing products with the latest technological innovations, including VoLTE and VoWIFI in different locations. Our teams have tested products running on Android, iOS, BBOS, Symbian, and Windows Phone Operating systems and with the latest and most used applications. We also offer Project Management, and live network Field Testing for the full range of wireless-enabled devices, from mobile phone core functionalities to GSMA TS.11 specification, applications, and services testing, through to modules and devices used in the automotive and telecommunications industries.",
    servicePara4:
      "Our field test team executes mobile devices Field Testing in the designated market. Field tests consist of stationary and mobility testing. Stationary Testing: Stationary field testing is a type of mobile device field testing; where test cases are executed in stationary mode and pre-identified geographical locations.  The main goal of such testing is to ensure that the mobile device behaves according to operator and country specifications. Mobility Testing :Mobility test cases run in mobile testing vehicles. Mobility testing covers different network protocols. It measures the device's data downloading and uploading capabilities, calls functionality, and success rate, on a predefined route. Handovers; and performances in weak field conditions, as well as in varying strengths, are also tested within the scope of mobility testing.",
    serviceImage:
      "img/demos/digital-agency-2/our-services/fieldTestingServices.jpg",

    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",

    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //GCF
  {
    serciceId: "IdGlobalCertificationForum",
    serviceHeading: "Global Certification Forum",
    servicePara1: "",
    servicePara2:
      "The basic intuition behind the GCF Certification is to provide a certified framework for devices with integrated cellular technologies such as GERAN (GSM), UTRAN (UMTS), and E-UTRAN (LTE), which work within the global frequency bands (GSM 900/1800, FDD I and FDD VIII). All devices with integrated 3GPP modules like netbooks, consumer electronic devices, smart meters, etc., but also handsets, PDAs, smartphones, USB modules, and other components benefit from GCF Certification.",
    servicePara3:
      "Mobile network operators focus on the tests which ensure that new devices will work well in their networks. However, testing new devices for conformance and interoperability is hardly feasible. By relying on GCF Certification, operators can be sure that the core functionalities of a new device fulfill their requirements. GCF Certification is a plus for selling devices to operators or retailers, especially in Europe and Asia.",
    servicePara4:
      "We assist manufacturers in the process of obtaining GCF Certification. Along with our authorized partners, we develop test cases to cover the functionalities of a device and conduct Field Testing and Interoperability Testing. The results are documented and submitted for review to obtain the certification.",
    serviceImage: "img/demos/digital-agency-2/our-services/GCFservice.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //GPS
  {
    serciceId: "IdGPStesting",
    serviceHeading: "G P S Testing",
    servicePara1: "",
    servicePara2:
      "The global positioning system (GPS) is a space-based radio navigation system. And the use of GPS is increasing day by day. It’s important for manufacturers to make sure that GPS receivers get signals and communicate effectively with all the connected systems.",
    servicePara3:
      "GPS navigation is a common feature in automobiles now. Drivers rely on this to find unfamiliar locations and find the route to reach that destination. Beyond this fundamental duty of the GPS navigator, present-day navigators provide many new features such as the alternative route to the same location, redirecting routes, routes avoiding tolls, ferries, other points of interest, etc.",
    servicePara4:
      "There are a series of fundamental receiver performance parameters applicable to GPS systems such as sensitivity, time to first fix and reacquisition time, etc. Our talented team of test engineers and test managers run test cases based on all these parameters to evaluate the performance of the GPS system and thus help the manufacturers to find out errors in their system and to rectify them, to provide customers a better experience.",
    serviceImage: "img/demos/digital-agency-2/our-services/GPSservice.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //Tuner and Media
  {
    serciceId: "IdTunerAndMediaTesting",
    serviceHeading: "Tuner & Media Testing",
    servicePara1: "",
    servicePara2:
      "Automotive infotainment is generally a hardware and software platform that delivers audio and video in your car. This could be, for example, car radio broadcasting, audio, and video streaming via a wireless (LTE, Wi-Fi, Bluetooth®) or wired network (HDMI, Ethernet), or even a CD or USB device.",
    servicePara3:
      "Tuner & Media solutions in cars are becoming increasingly complex. Mobile internet, traffic information, navigation, digital broadcast, and streaming services are all combined in one system. Each service requires its antennas. To ensure the correct functionality of each part of the infotainment system and to discover sources and effects of interference, we offer a complete set of test and measurement solutions for multimedia, audio, antennas, and navigation services. With the vast number of available broadcast, wireless and cellular standards as well as different audio and video file formats and codecs, manufacturers of infotainment systems need to ensure the correct functionality, even in the presence of interference.",
    servicePara4:
      "We Offer “Tuner & Media” Test Solutions For:All analog and digital broadcasting standards, Compliance testing for the radio equipment directive (RED) for AM, FM, DAB, DRM, Wi-Fi, Bluetooth®, LTE, GNSS, radar, and much more, Conformance testing for HDMI interfaces and Ethernet (100BASE-T1 and 1000 BASE-T1),Audio speaker setup testing, Complex receiver diversity test scenarios (1x2, 1x3, and 1x4), Realistic generation of dynamic navigation scenarios and Production testing for infotainment systems (multichannel generator using radio, LTE, Wi-Fi, GNSS signals, etc).",
    serviceImage:
      "img/demos/digital-agency-2/our-services/TunerAndMediaService.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //HMI
  {
    serciceId: "IdHMItesting",
    serviceHeading: "H M I Testing",
    servicePara1: "",
    servicePara2:
      "Infotainment, HMI (human-machine interface), and connectivity encompass functions that allow the driver and passengers to interact with the vehicle's infotainment and user interface systems. HMIs deliver convenience, information, and entertainment in a safe and seamless manner. HMI is amongst the most readily-visible and highly-used functions in the vehicle.",
    servicePara3:
      "These HMI and associated functionalities provide huge opportunities for unique branding and differentiation in the market and help in a competitive advantage for manufacturers. This includes traditional radio tuners on the low end to complex infotainment systems controlled through large touch panel displays.",
    servicePara4:
      "Although the range of HMI functionalities is quite broad. However, they share many common design challenges. We test HMI software systems to ensure that complex technical features are perfectly interlinked to each other, as well the interfacing between different applications is easy and smooth for drivers to perform actions. Also, we help the developers in the localization of HMI in different markets.",
    serviceImage: "img/demos/digital-agency-2/our-services/HMIservice.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //Manual Testing
  {
    serciceId: "IdManualTesting",
    serviceHeading: "Manual Testing",
    servicePara1: "",
    servicePara2:
      "Manual testing is considered the backbone of the complete quality assurance and testing life cycle. It is impossible to guarantee a high quality of a product without manual testing procedures. Manual testing, as its name implies, is performed by a human. ",
    servicePara3:
      "This type of software testing is the simplest one but helps to detect critical bugs and system vulnerabilities. It doesn't require knowledge of specific automated tools but a set of special skills and a thorough understanding of the project requirements. In other words, manual testing can be defined as a process of software testing performed from the end-user's perspective in order to detect existing defects and provide a high level of product quality.",
    servicePara4:
      "Our team of experienced test engineers and developers leverage their knowledge to check and validate your application for bugs and defects to smoothen your development. ",
    serviceImage:
      "img/demos/digital-agency-2/our-services/manualTestingService.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //Automation Testing
  {
    serciceId: "IdAutomationTesting",
    serviceHeading: "Automation Testing",
    servicePara1:
      "Explore and implement viable automated quality assurance and testing services with Vis Group",
    servicePara2:
      "We automate and put your testing process on auto-pilot, however, we monitor and receive frequent and consistent test reports that benchmarks your system performance. ",
    servicePara3:
      "Automated testing is commonly referred to as automation testing an emerging and dominant type of testing in the digital product testing world. automation testing provides tools and frameworks for testing and inspections of digital solutions.",
    servicePara4:
      "Automated testing is a great way to optimize QA resources.  Vis Group will work with you to create a custom automation testing schedule, provide quick feedback on weak spots, and share ideas for software improvement. Thus, you’ll be able to collect meaningful data for the development team, accelerate software updates, and fast-track product releases.",
    serviceImage:
      "img/demos/digital-agency-2/our-services/automationTestingService.jpg",

    tag1: "Automated QA managed Services",
    tag2: "we cover wide range of technology stack",
    tag3: "Higher testing and efficiency",

    serviceAnalysis: "Some Text about service analysis",
    serviceDevelopment: "Some Text about  service Development",
    ServiceDelivery: "Some Text about Service Delivery",
  },
  //Software Development
  {
    serciceId: "IdSoftwareDevelopment",
    serviceHeading: "Software Development",
    servicePara1:
      "Custom and on-Demand Software Development Services that Take Care of your Digital Transformation Needs ",
    servicePara2:
      "We plan, code, test and deploy scalable and custom software solutions for start-ups, small and medium-sized businesses, and enterprise-level applications to empower them to unleash the potential of digital transformation.",
    servicePara3:
      "Our developers and engineers leverage agile practices to develop innovative & powerful web applications, high-level mobile applications, and any other custom applications to meet the specified requirements and market needs.",
    servicePara4:
      "So, Hire us for your digital transformation adventure; we will make it a smooth ride for you. One of the most visible advantages of a custom solution is that it eliminates any further investments in the shape of commercial-of-the-shelf products. ",
    serviceImage:
      "img/demos/digital-agency-2/our-services/SWdevelopmentService.jpg",
    tag1: "tag Line One",
    tag2: "tagLine Two",
    tag3: "TagLine Three",
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
      ElserviceTag1.textContent = `${singleService.tag1}`;
      ElserviceTag2.textContent = `${singleService.tag2}`;
      ElserviceTag3.textContent = `${singleService.tag3}`;
    }
  }
}
