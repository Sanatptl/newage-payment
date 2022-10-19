import styles from "../style"
import Button from "./Buttons";


const CTA = () => {
  return (
    <section className={`${styles.padding} ${styles.marginY} flex justify-center items-center sm:flex-row flex-col box-shadow bg-black-gradient-2 rounded-[20px]`} >
      <div className="flex-1 flex-col flex">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:mt-0 mt-10 sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  )
}


export default CTA;