import home from "@/assets/images/pro-links-home.svg";
import shape1 from "@/assets/images/shape/shape-1.svg";
import shape2 from "@/assets/images/shape/shape-2.svg";
import shape3 from "@/assets/images/shape/shape-3.svg";
import shape4 from "@/assets/images/shape/shape-4.svg";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="navbar-area bg-white">
        <div className="container relative">
          <div className="row items-center">
            <div className="w-full">
              <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                <div className="navbar-brand mr-5">
                  <h2 className="text-4xl font-black">
                    Pro <span className="text-orange-500">Links</span>
                  </h2>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
        <div className="hero_shape shape_1">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="hero_shape shape_2">
          <Image src={shape2} alt="shape" />
        </div>
        <div className="hero_shape shape_3">
          <Image src={shape3} alt="shape" />
        </div>
        <div className="hero_shape shape_4">
          <Image src={shape4} alt="shape" />
        </div>
        <div className="hero_shape shape_6">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="hero_shape shape_7">
          <Image src={shape4} alt="shape" />
        </div>
        <div className="hero_shape shape_8">
          <Image src={shape3} alt="shape" />
        </div>
        <div className="hero_shape shape_9">
          <Image src={shape2} alt="shape" />
        </div>
        <div className="hero_shape shape_10">
          <Image src={shape4} alt="shape" />
        </div>
        <div className="hero_shape shape_11">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="hero_shape shape_12">
          <Image src={shape2} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="w-full lg:w-1/2">
              <div className="pt-150 lg:pt-0">
                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                  Compartilhe seus{" "}
                  <span className="text-orange-500">links</span>
                </h2>
                <p className="mt-8 lg:mr-8">
                  Transforme suas redes sociais em conexões poderosas.
                  Compartilhe seus links em um piscar de olhos e faça parte da
                  comunidade que adora compartilhar.
                </p>
                <div className="mt-10">
                  <a className="main-btn" href="#0">
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_shape hidden lg:block"></div>
        <div className="header_image flex items-center">
          <div className="image 2xl:pl-25">
            <Image src={home} alt="Header Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
