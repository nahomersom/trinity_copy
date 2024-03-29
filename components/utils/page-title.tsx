
type PageTitleType = {
    
    title: string
  }
export  function PageTitle(props:PageTitleType){
return (
<section className=" py-4">
    <label className=" font-playfair-display text-[40px] text-[#002937] font-black leading-[53px]">{props.title}</label>

</section>
);
} 