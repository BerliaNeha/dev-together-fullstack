import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import react from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
export const PrivacyAndPolicy = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{m:5}}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ color: (theme) => theme.palette.primary.main }}
          variant="text"
        >
          <ChevronLeftIcon /> Go back
        </Button>
        <Box sx={{mb:2}}>
          <Typography  id="privacy" variant="h4" sx={{fontWeight:"bold"}}>Privacy Policy</Typography>
          <Typography>
            Our Privacy Policy was last updated on [30th August 2022]. This
            Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You. We use Your Personal data to provide and improve the
            Service. By using the Service, You agree to the collection and use
            of information in accordance with this Privacy Policy. This Privacy
            Policy was generated by TermsFeed Privacy Policy Generator.
            Interpretation and Definitions Interpretation The words of which the
            initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
            Definitions For the purposes of this Privacy Policy: "Account" means
            a unique account created for You to access our Service or parts of
            our Service. "Business", for the purpose of the CCPA (California
            Consumer Privacy Act), refers to the Company as the legal entity
            that collects Consumers' personal information and determines the
            purposes and means of the processing of Consumers' personal
            information, or on behalf of which such information is collected and
            that alone, or jointly with others, determines the purposes and
            means of the processing of consumers' personal information, that
            does business in the State of California. "Company" (Dev NET refers
            to [COMPANY INFORMATION] For the purpose of the GDPR, the Company is
            the Data Controller. "Country" refers to [Dev Net, Germany].
            "Consumer", for the purpose of the CCPA (California Consumer Privacy
            Act), means a natural person who is a California resident. A
            resident, as defined in the law, includes (1) every individual who
            is in the USA for other than a temporary or transitory purpose, and
            (2) every individual who is domiciled in the USA who is outside the
            USA for a temporary or transitory purpose. "Cookies" are small files
            that are placed on Your computer, mobile device or any other device
            by a website, containing the details of Your browsing history on
            that website among its many uses. "Data Controller", for the
            purposes of the GDPR (General Data Protection Regulation), refers to
            the Company as the legal person which alone or jointly with others
            determines the purposes and means of the processing of Personal
            Data. "Device" means any device that can access the Service such as
            a computer, a cell phone or a digital tablet. "Do Not Track" (DNT)”
            is a concept that has been promoted by US regulatory authorities, in
            particular the U.S. Federal Trade Commission (FTC), for the Internet
            industry to develop and implement a mechanism for allowing internet
            users to control the tracking of their online activities across
            websites. "Personal Data" is any information that relates to an
            identified or identifiable individual. For the purposes of GDPR,
            Personal Data means any information relating to You such as a name,
            an identification number, location data, online identifier or to one
            or more factors specific to the physical, physiological, genetic,
            mental, economic, cultural or social identity. For the purposes of
            the CCPA, Personal Data means any information that identifies,
            relates to, describes or is capable of being associated with, or
            could reasonably be linked, directly or indirectly, with You.
            "Sale", for the purpose of the CCPA (California Consumer Privacy
            Act), means selling, renting, releasing, disclosing, disseminating,
            making available, transferring, or otherwise communicating orally,
            in writing, or by electronic or other means, a Consumer's personal
            information to another business or a third party for monetary or
            other valuable consideration. "Service" refers to the Website.
            "Service Provider" means any natural or legal person who processes
            the data on behalf of the Company. It refers to third-party
            companies or individuals employed by the Company to facilitate the
            Service, to provide the Service on behalf of the Company, to perform
            services related to the Service or to assist the Company in
            analyzing how the Service is used. For the purpose of the GDPR,
            Service Providers are considered Data Processors. "Usage Data"
            refers to data collected automatically, either generated by the use
            of the Service or from the Service infrastructure itself (for
            example, the duration of a page visit). "Website" refers to
            [DevNet], accessible from [https://devnet-frontend.vercel.app/]
            "You" means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable. Under GDPR (General
            Data Protection Regulation), You can be referred to as the Data
            Subject or as the User as you are the individual using the Service.
            Collecting and Using Your Personal Data Types of Data Collected
            Personal Data While using Our Service, We may ask You to provide Us
            with certain personally identifiable information that can be used to
            contact or identify You. Personally identifiable information may
            include, but is not limited to: Email address First name and last
            name Phone number Address, State, Province, ZIP/Postal code, City
            Usage Data Usage Data Usage Data is collected automatically when
            using the Service. Usage Data may include information such as Your
            Device's Internet Protocol address (e.g. IP address), browser type,
            browser version, the pages of our Service that You visit, the time
            and date of Your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data. When You access the Service
            by or through a mobile device, We may collect certain information
            automatically, including, but not limited to, the type of mobile
            device You use, Your mobile device unique ID, the IP address of Your
            mobile device, Your mobile operating system, the type of mobile
            Internet browser You use, unique device identifiers and other
            diagnostic data. We may also collect information that Your browser
            sends whenever You visit our Service or when You access the Service
            by or through a mobile device.
          </Typography>
        </Box>
        <Box sx={{mb:2}}>
          <Typography id="terms" variant="h4" sx={{fontWeight:"bold"}}>Terms and Conditions</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices neque a purus porta, sit amet fermentum mauris congue.
            Aliquam ultricies elementum lacus, sed rhoncus lectus rhoncus a.
            Duis erat nibh, rhoncus et elementum quis, rutrum ut ligula. Nulla
            sit amet tortor id dui vulputate malesuada. Pellentesque diam
            lectus, varius in finibus at, aliquam scelerisque orci. Fusce
            porttitor mollis nibh, in euismod tellus. Ut venenatis lorem vel dui
            venenatis, non mollis massa aliquet. Sed blandit enim eget ligula
            ornare, ac interdum dolor tristique. Vestibulum sed interdum metus.
            Sed id aliquam arcu. Maecenas consectetur elit varius, efficitur
            ipsum et, tincidunt turpis. Donec eget nibh iaculis, suscipit purus
            id, dignissim turpis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec eu dictum
            ipsum. Aliquam egestas lacinia fringilla. Aliquam a tellus pulvinar,
            pellentesque libero sit amet, egestas quam. In ut elementum massa,
            at semper nisi. Donec sit amet ex nec orci ultrices pharetra.
            Curabitur id lacus nec est finibus elementum. Duis convallis
            dignissim neque id porttitor. Donec congue enim quam, eget convallis
            sem accumsan ut. Nulla posuere magna urna, viverra bibendum libero
            facilisis et. Suspendisse vel ullamcorper est. Nullam laoreet dui
            vitae diam laoreet eleifend. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Cras finibus
            sit amet libero vitae facilisis. Aliquam at mi molestie libero
            elementum consectetur quis sit amet felis. Aliquam suscipit, mauris
            in rutrum dictum, risus lacus iaculis magna, quis blandit sem metus
            eu sapien.
          </Typography>
        </Box>
        <Box sx={{mb:2}}>
          <Typography id="copyright" variant="h4" sx={{fontWeight:"bold"}}>Copyright</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices neque a purus porta, sit amet fermentum mauris congue.
            Aliquam ultricies elementum lacus, sed rhoncus lectus rhoncus a.
            Duis erat nibh, rhoncus et elementum quis, rutrum ut ligula. Nulla
            sit amet tortor id dui vulputate malesuada. Pellentesque diam
            lectus, varius in finibus at, aliquam scelerisque orci. Fusce
            porttitor mollis nibh, in euismod tellus. Ut venenatis lorem vel dui
            venenatis, non mollis massa aliquet. Sed blandit enim eget ligula
            ornare, ac interdum dolor tristique. Vestibulum sed interdum metus.
            Sed id aliquam arcu. Maecenas consectetur elit varius, efficitur
            ipsum et, tincidunt turpis. Donec eget nibh iaculis, suscipit purus
            id, dignissim turpis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec eu dictum
            ipsum. Aliquam egestas lacinia fringilla. Aliquam a tellus pulvinar,
            pellentesque libero sit amet, egestas quam. In ut elementum massa,
            at semper nisi. Donec sit amet ex nec orci ultrices pharetra.
            Curabitur id lacus nec est finibus elementum. Duis convallis
            dignissim neque id porttitor. Donec congue enim quam, eget convallis
            sem accumsan ut. Nulla posuere magna urna, viverra bibendum libero
            facilisis et. Suspendisse vel ullamcorper est. Nullam laoreet dui
            vitae diam laoreet eleifend. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Cras finibus
            sit amet libero vitae facilisis. Aliquam at mi molestie libero
            elementum consectetur quis sit amet felis. Aliquam suscipit, mauris
            in rutrum dictum, risus lacus iaculis magna, quis blandit sem metus
            eu sapien.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{fontWeight:"bold"}}> Cookie consent </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultrices neque a purus porta, sit amet fermentum mauris congue.
            Aliquam ultricies elementum lacus, sed rhoncus lectus rhoncus a.
            Duis erat nibh, rhoncus et elementum quis, rutrum ut ligula. Nulla
            sit amet tortor id dui vulputate malesuada. Pellentesque diam
            lectus, varius in finibus at, aliquam scelerisque orci. Fusce
            porttitor mollis nibh, in euismod tellus. Ut venenatis lorem vel dui
            venenatis, non mollis massa aliquet. Sed blandit enim eget ligula
            ornare, ac interdum dolor tristique. Vestibulum sed interdum metus.
            Sed id aliquam arcu. Maecenas consectetur elit varius, efficitur
            ipsum et, tincidunt turpis. Donec eget nibh iaculis, suscipit purus
            id, dignissim turpis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec eu dictum
            ipsum. Aliquam egestas lacinia fringilla. Aliquam a tellus pulvinar,
            pellentesque libero sit amet, egestas quam. In ut elementum massa,
            at semper nisi. Donec sit amet ex nec orci ultrices pharetra.
            Curabitur id lacus nec est finibus elementum. Duis convallis
            dignissim neque id porttitor. Donec congue enim quam, eget convallis
            sem accumsan ut. Nulla posuere magna urna, viverra bibendum libero
            facilisis et. Suspendisse vel ullamcorper est. Nullam laoreet dui
            vitae diam laoreet eleifend. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Cras finibus
            sit amet libero vitae facilisis. Aliquam at mi molestie libero
            elementum consectetur quis sit amet felis. Aliquam suscipit, mauris
            in rutrum dictum, risus lacus iaculis magna, quis blandit sem metus
            eu sapien.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
