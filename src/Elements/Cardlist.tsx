import Card from "./card";


export default function Cards({data} : any) {
    return (
      <div>
        {
            data.map((el: any)=>{
            return(<>
                <Card {...el}/>
            </>)
            })
        }
        </div>
    );
  }
  