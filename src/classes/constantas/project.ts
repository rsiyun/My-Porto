import { Enumsource } from "~/interfaces/project/project-list";

export const project = [
    {
        title: "Ecommerce desa panjunan",
        desc: "pengabdian masyarakat desa panjunan",
        slug: "ecomm-desa-panjunan",
        HeroImage: "/asset/project/Ecommerce/2024-08-18 23-21-31.webp",
        github: "",
        preview: "https://umkm-desapanjunan.com/",
        source: Enumsource.Close,
        tools: [{img: "/asset/tools/laravel.svg", link:"https://laravel.com/", alt: "laravel"}]
    },
    {
        title: "next js chatbot",
        desc: "trying make chatbot with ollama dependency",
        slug: "chat-app",
        HeroImage: "/asset/project/ReactChatbot/Screenshot_naura_chatbot.png",
        github: "https://github.com/rsiyun/React-Chatbot-Ollama",
        preview: "",
        source: Enumsource.Open,
        tools: [{img: "/asset/tools/next-js.svg", alt:"Nextjs", link:"https://nextjs.org/"}, {img: "/asset/tools/ollama.png", alt:"Ollama", link:"https://ollama.com/"}],
    },
    {
        title: "Darmawisata Indonesia mobile app",
        desc: "Online Travel Agency mobile app",
        slug: "darmawisata-app",
        HeroImage: "/asset/project/Darwisapp/darmawisata-hero-image.webp",
        github: "",
        preview: "https://play.google.com/store/apps/details?id=com.darmawistaindonesia",
        source: Enumsource.Close,
        tools: [{link: "https://angular.dev/", img: "https://v10.angular.io/assets/images/logos/angular/shield-large.svg", alt: "angular"}, {link: "https://ionicframework.com/", img: "/asset/tools/ionic.svg", alt: "ionic"}]
    },
    {
        title: "Mesti Minum",
        desc: "Adalah sebuah website jual beli minuman untuk umkm",
        slug: "mesti-minum",
        HeroImage: "/asset/project/MestiMinum/mestiminum.jpg",
        preview: "",
        github: "",
        source: Enumsource.Close,
        tools: [{img: "/asset/tools/laravel.svg", link:"https://laravel.com/", alt: "laravel"},{img: "/asset/tools/livewire.svg", link:"https://livewire.laravel.com/", alt: "Livewire"}]
    },
    {
        title: "weeding invitation system",
        desc: "a system to make invitation weeding",
        slug: "weeding-invitation-system",
        HeroImage: "/asset/project/WeedingInvitation/2024-08-18 23-41-03.webp",
        github: "",
        preview: "",
        source: Enumsource.Close,
        tools: [{img: "/asset/tools/laravel.svg", alt:"laravel", link:"https://laravel.com/"}, {img: "/asset/tools/livewire.svg", alt: "livewire", link:"https://livewire.laravel.com/"}],
    },
    {
        title: "Sepuja",
        desc: "sepuja is order system for pujasera",
        slug: "sepuja-se-pujasera",
        HeroImage: "/asset/project/Sepuja/2024-08-19 00-29-39.webp",
        github: "https://github.com/rsiyun/Restaurant-pos",
        preview: "",
        source: Enumsource.Open,
        tools: [{img: "/asset/tools/laravel.svg", link:"https://laravel.com/", alt: "laravel"}]
    },
]