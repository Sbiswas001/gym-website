import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Welcome to EVOGYM, where your journey to a healthier, stronger, and
            more vibrant you begins! Our state-of-the-art facility is designed
            to inspire and empower you with top-notch equipment, personalized
            training, and a supportive community. Step into a space where
            motivation meets innovation, and start transforming your life today
            at EVOGYM!
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Checkout our merch</p>
          <p className="my-5">Become a fan</p>
          <p>We are waiting for you.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact US</h4>
          <p className="my-5">Kolkata, India</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
