import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20" id="upgrade">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="text-primary sm:text-28 text-18 mb-3">Build</p>
            <h2 className="text-white sm:text-40 text-30  font-medium mb-5">
              Build Your Next App With ESCW Labs
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-7">
              ESCW Labs delivers custom software solutions that bring your ideas to life faster, smarter,
              and more efficiently—helping your business grow without unnecessary delays.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-7/10 gap-5 sm:gap-10">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-muted text-opacity-60">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src= {`${getImagePrefix()}images/upgrade/img-build.png`}
                alt="image"
                width={625}
                height={580}
                className="-mr-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
