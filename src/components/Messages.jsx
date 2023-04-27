import textImg from "../assets/img/Left side.jpg";
import backgroundImg from "../assets/img/sea.jpeg";

export const Messages = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <img src={textImg} alt="img-fluid" />
          </div>
          <div className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias, aliquam, repellat fugiat quia ducimus mollitia laboriosam reprehenderit corporis a laudantium odit eligendi reiciendis voluptatum possimus porro totam id sapiente?
          Debitis necessitatibus nisi eligendi, similique optio ab sequi aut. Corrupti, molestiae sit unde ab soluta corporis facilis est voluptatem vero labore rem suscipit, id expedita commodi nesciunt doloremque. Rem, accusantium?
          Dicta animi maxime mollitia dolores beatae ipsum quo maiores eos voluptatibus quaerat cumque, nihil necessitatibus nemo magni laborum deserunt excepturi neque ea enim eligendi nisi saepe ab dolorem? Fugiat, quo?</div>
        </div>
        <div className="row">
          <div className="col-xl-6 offset-6 text-color-bg" style={{backgroundImage: `url(${backgroundImg})`}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam officiis similique veritatis ducimus eligendi. Hic qui veniam nobis magnam, praesentium obcaecati. Laborum incidunt dolorem tenetur repudiandae omnis libero veniam.
            Voluptatibus, sint, provident suscipit soluta cupiditate eius nulla pariatur ipsa corporis reprehenderit, obcaecati assumenda nihil facere enim. Fuga ut aperiam sapiente, impedit sequi commodi expedita mollitia temporibus provident ducimus voluptatum.
            Quos iusto vero perferendis recusandae accusantium delectus rem nostrum earum nobis est aperiam numquam laboriosam iste sequi nesciunt, suscipit nisi eligendi reiciendis. Beatae laborum unde ut. Reprehenderit nisi rem sint.
          </div>
        </div>
      </>
    )
  };