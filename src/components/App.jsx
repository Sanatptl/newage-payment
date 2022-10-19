"use strict";
import styles from "../style";
import {
  Navbar,
  Billing,
  Business,
  Stats,
  Testimonial,
  Clients,
  Hero,
  CTA,
  Footer,
  CardDeal,
} from "../components";

/*
function App(){
    return (
        <div className = "bg-primary overflow-hidden" >
            <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
                <div className= {`${styles.boxWidth}`}>
                    <Navbar />

                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className= {`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className= {`${styles.boxWidth}`}>
                    <States />
                    <Billing />
                    <Card />
                    <Business />
                    <Testimonial />
                    <Credits />
                    <Buttons />
                    <Clients />
                    <FeedbackCard />
                    <Footer />
                </div>
            </div>
        </div>
    )

}
*/

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

// function App() {
//   return (
//     <div className="w-full bg-primary">
//       <div className={`${styles.flexCenter} ${styles.paddingX}`}>
//         <div className={styles.boxWidth}>
//           <Navbar />
//         </div>
//       </div>
//       <div className={styles.boxWidth}>

//       <Hero />
//       </div>
//     </div>
//   );
// }

export default App;
