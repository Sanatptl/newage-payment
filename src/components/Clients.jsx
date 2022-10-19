import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section id="clients" className={`my-4 ${styles.flexCenter}`}>
      <div className="flex flex-wrap justify-center items-center w-full">
        {clients.map((client)=>(
          <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[100px]">
            <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px]"/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients;