const FilmBoxPlayer = (): JSX.Element => {
  return (
    <>
      <video
        src="/videos/outputvideo.mp4"
        className="rounded-xl"
        controls
        preload="auto"
      />
    </>
  );
};

export default FilmBoxPlayer;
