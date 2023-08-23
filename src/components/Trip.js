import TripData from "./TripData";
import "./Tripstyles.css";
import Trip1 from "../assets/t1.jpg";
import Trip2 from "../assets/t2.jpg";
import Trip3 from "../assets/t3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destination using Google Maps. </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Accra"
          text="Accra is the administrative, economic, and educational centre of Ghana. The city contains the head offices of all of the large banks and trading firms, the insurance agencies, the electricity corporation, the general post office, the large open markets to which most of the food supply comes, and the Accra Central Library.Accra has well-paved roads and a good municipal bus service. A transportation hub, the city is also connected by rail to Kumasi, in the interior, and to the port city of Tema, 17 miles (27 km) to the east, which has taken over Accra’s port function. Accra is the site of Kotoka International Airport. "
          url="https://youtu.be/WGADwCpuRmA"
        />
        <TripData
          image={Trip2}
          heading="Trip to Nzulezo"
          text="Nzulezo is located near the village of Beyin, roughly 90 kilometers west of Takoradi, in the Jomoro District of the Western Region of Ghana. Nzulezo overlooks the Lake Tadane, and is entirely made up of stilts and platforms. In 2000, it was nominated as a UNESCO World Heritage Site, and it is a one of the major tourist attraction in the area. "
          url="https://youtu.be/lHj2EaULcMA"
        />
        <TripData
          image={Trip3}
          heading="Trip to Takoradi"
          text="Takoradi is a town located on the South Western part of Ghana. It is a twin city (sister city Sekondi) and a capital city of Western Region of Ghana. Sekondi, the sister city is located east of Takoradi. It became twin city in 1946. Takoradi was established by the europeans, during the construction of the harbour. Takoradi is nobody's hometown, not even the Ahantas. It is believed that, the europeans consulted the local inhabitants for the construction of the port as well as the township. The Ahantas come from Apowa, Beaho, Anaji, Assakae and surrounding areas. Everybody else in Takoradi City is a migrant, tourist or visitor."
          url="https://youtu.be/S2l6hx9RngE"
        />
      </div>
    </div>
  );
}
export default Trip;
