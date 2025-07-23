const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>

      <h3>
        <u>Career Background</u>
      </h3>
      <p>
        My interest in the tech industry stems from an interest in new and
        rising technologies, and the ways in which we can use them to
        change/improve business systems. I also enjoy using deductive processes
        to find solutions to problems and creating applications which cater to a
        client’s needs. In 2024, I undertook a software development bootcamp
        with Northcoders, where I learned valuable skills relating to industry
        practices. Using the valuable skillset I was taught here, I pivoted into
        a professional web role as a junior developer.
        <br></br>
        <br></br>
        Since then, I have gained experience working in a lead role as sole
        developer, and have continued to refine my knowledge and continue my
        learning online and in the workplace. As somebody with experience in
        working with a variety of programming languages, as well as a background
        in computer science, my goal is to progress in my career and become a
        senior developer/engineer.
        <br></br>
        <br></br>
      </p>
      <img
        src="/coding.png"
        alt="A device screen featuring many lines of code"
        className="rounded-corners"
      ></img>
      <img
        src="/coding2.png"
        alt="A device screen featuring many lines of code"
        className="rounded-corners margin-left-50"
      ></img>
      <br></br>
      <br></br>
      <h3>
        <u>Hobbies/Interests</u>
      </h3>

      <div className="hobby-section">
        <div className="hobby-content">
          <p>
            I love music, and have taught myself to play bass guitar using books
            and online tutorials. I play in a band, which has helped to improve
            my teamwork, creativity and coordination skills. Some of my
            favourite bands include The Cure, The Smiths, Queen, Led Zeppelin,
            Nirvana and Alice in Chains.
          </p>
          <img
            src="/bass.png"
            alt="A sleek black bass guitar"
            className="rounded-corners"
          />
        </div>
        {/*         <div className="hobby-content">
          <img
            src="/basswithamp.png"
            alt="A bass guitar with a large amplifier"
            className="rounded-corners"
          />
        </div> */}
        <div className="hobby-content">
          <p>
            I also enjoy reading, particularly horror/thriller novels and am
            currently working on writing my first novel.
          </p>
          <div className="book-row">
            <img
              src="/shining.jpg"
              alt="The Shining by Stephen King book cover"
              className="rounded-corners book"
            />
            <img
              src="/salemslot.jpg"
              alt="Salem's Lot by Stephen King book cover"
              className="rounded-corners book"
            />
          </div>
        </div>
      </div>

      {/* <p>I enjoy gaming, and play on a wide variety of consoles ranging from the Playstation 5 to the SNES. My favourite genres include platformers, JRPGs and collactathons.</p>
      <img src="/nsmbds.png" alt="Box art for the game New Super Mario Bros on Nintendo DS" className="rounded-corners gaming"></img>
      <img src="/majorasmask.png" alt="Artwork from the game The Legend of Zelda: Majora's Mask" className="rounded-corners margin-left-50 gaming"></img>
      <img src="/ff7box.png" alt="Box art for the game Final Fantasy VII" className="rounded-corners margin-left-50 gaming"></img>
      <p>I am also a fan of Marvel comic books, particularly Spider-Man and X-Men, having collected a lot of these series growing up.</p>
      <img src="/asm311cover.png" alt="The front cover of a comic book, Amazing Spider Man Issue 311" className="rounded-corners comic-book"></img>
      <img src="/asm311page.png" alt="A page from Amazing Spider-Man Issue 311, featuring the supervillain Mysterio" className="rounded-corners comic-book"></img>
      <img src="/xmen133.png" alt="The front cover of a comic book, Uncanny X-Men Issue 133" className="rounded-corners comic-book"></img> */}
    </div>
  );
};

export default AboutMe;
