import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoo bank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-[1.5] flex-row justify-between w-full flex-wrap  md:mt-0 mt-10">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {link.title}
                </h4>
                <ul className="mt-4 list-none">
                  {link.links.map((list, ind) => {
                    return (
                      <li
                        className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer ${
                          link.links.length - 1 == ind ? "mb-0" : "mb-4"
                        }`}
                      >
                        {list.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

        <div className="flex md:flex-row flex-col w-full items-center pt-6 justify-between border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, ind) => {
            return (
              <img
                src={social.icon}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  socialMedia.length - 1 !== ind ? "mr-4" : "mr-0"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
