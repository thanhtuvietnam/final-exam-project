const FilmBoxPlayer: React.FC = () => {
  return (
    <>
      <video
        src="/videos/authVid.mp4"
        className="rounded-xl"
        controls
        preload="auto"
      />
    </>
  );
};

export default FilmBoxPlayer;
