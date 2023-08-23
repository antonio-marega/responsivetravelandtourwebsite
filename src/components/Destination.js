import Mountain1 from "../assets/k2.jpg";
import Mountain2 from "../assets/k4.jpg";
import Mountain3 from "../assets/b3.jpg";
import Mountain4 from "../assets/b4.jpg";
import Mountain5 from "../assets/a1.jpg";
import Mountain6 from "../assets/a2.jpg";
import Mountain7 from "../assets/e1.jpg";
import Mountain8 from "../assets/e2.jpg";

import "./Destinationstyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tour gives you the opportunity to see a lot, within a time frame </p>

      <DestinationData
        className="first-des"
        heading="Kakum National Park"
        text="Considered the nation's park, Kakum National Park is a destination that everyone must see. It has an area of 145 square meters and is situated on the coast of southern Ghana (specifically the central part of of Ghana). The attraction is home to many endangered animals as well, especially mammals like antelopes and elephants. There is also a canopy walk suspended about 30 meters above the ground. The canopy walk can sometimes be scary if you are trying it for the first time, but it shouldn't be a problem if you have a sense of adventure. It provides a view above the trees and allows you to appreciate the surrounding nature."
        img1={Mountain1}
        img2={Mountain2}
        url="https://youtu.be/xWdGtTyvWO8"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Boti Falls"
        text="Waterfalls always attract people from all over the country and around the world, and Boti Falls is no different. Located in the Eastern Region of Ghana, 17km northeast of Koforidua, is a Ghana attraction with a history.

Boti Falls is an integral part of Ghana. According to history, Boti Falls is a twin waterfall, specifically male and female, representing the upper and lower falls."
        img1={Mountain3}
        img2={Mountain4}
        url="https://youtu.be/tyWUWP8EJA8"
      />

      <DestinationData
        className="first-des"
        heading="Aburi Botanical Gardens"
        text="Since Ghana is located in Africa, the country and nature benefit from the warmer climate, making the Aburi Botanical Gardens one of the most attractive sites in Ghana!.The gardens were officially opened in March 1890 and are located in the town of Aburi, hence its name, which is about 30km north of Accra in the Eastern Region of Ghana. The gardens consist of 160 acres, with 157 acres reserved and the 3 acres developed into basic infrastructure.

Visiting the Aburi Gardens is a calming journey that can take your mind off the stress you might be going through in life. Because it is approximately a 45-minute drive from Accra, you can easily travel here to have a picnic with your family and enjoy what nature offers."
        img1={Mountain5}
        img2={Mountain6}
        url="https://youtu.be/12qlKpLCS8s"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Elmina Castle"
        text="St. George Castle is a tourist site located in the Central Region of Ghana. This castle is one of the well-known landmarks in Ghana, and it is popularly known as the Elmina Castle. It can be found along the coast when driving from Accra to the Central Region.
When the Europeans (specifically Portuguese) came to Ghana, it was the first European structure they built back in the year 1482 for trading in gold and other natural resources. The Portuguese took two years to build the castle, completing it in 1486.
While the castle was initially constructed for trading gold, it later became a central point in the slave trade in Ghana. Enslaved people were gathered here and subsequently sold to their owners.
When you decide to visit this place, you will witness the physical history of the slave trade in the country and the impact it had on the people during that time.
"
        img1={Mountain7}
        img2={Mountain8}
        url="https://youtu.be/zJi9OBWsMSI"
      />
    </div>
  );
};
export default Destination;
