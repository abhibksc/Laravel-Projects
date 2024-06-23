import HeroModal from "./Hero";

const OrganiseEvent = () => {
  return (
    <div className=" bg-black ">
      <video
        className="w-full object-cover h-screen "
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-c4b6c.appspot.com/o/4916813-hd_1920_1080_30fps%20(1).mp4?alt=media&token=4dbc59da-d0a6-4801-bc07-74437ecc6633"
        autoPlay
        loop
        muted
      />

      <HeroModal />
    </div>
  );
};

export default OrganiseEvent;
