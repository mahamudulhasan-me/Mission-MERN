import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// import image
import { FcSearch } from "react-icons/fc";
import gp10 from "../../../assets/images/gallery/gp-10.jpg";
import gp13 from "../../../assets/images/gallery/gp-13.png";
import gp1 from "../../../assets/images/gallery/gp1.jpg";
import gp11 from "../../../assets/images/gallery/gp11.jpg";
import gp12 from "../../../assets/images/gallery/gp12.png";
import gp14 from "../../../assets/images/gallery/gp14.jpg";
import gp2 from "../../../assets/images/gallery/gp2.jpg";
import gp3 from "../../../assets/images/gallery/gp3.jpg";
import gp4 from "../../../assets/images/gallery/gp4.jpg";
import gp5 from "../../../assets/images/gallery/gp5.jpg";
import gp6 from "../../../assets/images/gallery/gp6.jpg";
import gp7 from "../../../assets/images/gallery/gp7.jpg";
import gp8 from "../../../assets/images/gallery/gp8.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const PhotoGallery = () => {
  return (
    <div>
      <SectionHeader section="Gallery" title="Latest Toy Town Gallery" />
      <PhotoProvider>
        <div className="grid grid-cols-12 place-items-stretch">
          <PhotoView src={gp3}>
            <div
              data-aos="zoom-in-right"
              className="md:col-span-2 col-span-4 row-span-2 relative group"
            >
              <img alt="img1" src={gp3} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp4}>
            <div
              data-aos="zoom-in"
              className="md:col-span-3 col-span-5 relative group"
            >
              <img alt="img1" src={gp4} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp1}>
            <div
              data-aos="zoom-in"
              className="md:col-span-2  col-span-3 relative group"
            >
              <img alt="img1" src={gp1} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp2}>
            <div
              data-aos="zoom-in"
              className="md:col-span-2 col-span-4  relative group"
            >
              <img alt="img1" src={gp2} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp5}>
            <div
              data-aos="zoom-in"
              className="col-span-4 md:col-span-3  relative group"
            >
              <img alt="img1" src={gp5} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp14}>
            <div
              data-aos="zoom-in-right"
              className="col-span-4 md:col-span-3  relative group"
            >
              <img alt="img1" src={gp14} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp10}>
            <div
              data-aos="zoom-in"
              className="col-span-5 md:col-span-4  relative group"
            >
              <img alt="img1" src={gp10} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <div data-aos="zoom-in" className="col-span-3">
            <PhotoView src={gp13}>
              <div className="relative group">
                <img alt="img1" src={gp13} className="h-full" />
                <div className="gallery-overly">
                  <FcSearch className="text-5xl cursor-pointer" />
                </div>
              </div>
            </PhotoView>
            <PhotoView src={gp12}>
              <div className="relative group">
                <img alt="img1" src={gp12} className="h-full" />
                <div className="gallery-overly">
                  <FcSearch className="text-5xl cursor-pointer" />
                </div>
              </div>
            </PhotoView>
          </div>
          <PhotoView src={gp6}>
            <div
              data-aos="zoom-in-right"
              className="col-span-3  relative group"
            >
              <img alt="img1" src={gp6} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp7}>
            <div data-aos="zoom-in-up" className="col-span-4  relative group">
              <img alt="img1" src={gp7} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>

          <PhotoView src={gp8}>
            <div data-aos="zoom-in-up" className="col-span-1  relative group">
              <img alt="img1" src={gp8} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
          <PhotoView src={gp11}>
            <div data-aos="zoom-in-up" className="col-span-4  relative group">
              <img alt="img1" src={gp11} className="h-full" />
              <div className="gallery-overly">
                <FcSearch className="text-5xl cursor-pointer" />
              </div>
            </div>
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGallery;
