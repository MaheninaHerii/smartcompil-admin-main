import {
    AccountCircle,
    ContactMail,
	FeaturedPlayList,
    DesignServices, Groups,
    Help,
    PermMedia,
    Work,
    WorkHistory
} from "@mui/icons-material";
import NousSommesPage from "../pages/NousSommesPage/NousSommesPage";
import NousSommesEdit from "../pages/NousSommesPage/components/NousSommesEdit";
import NousSommesDetail from "../pages/NousSommesPage/components/NousSommesDetail";
import NosServicesEtProduitsPage from "../pages/NosServicesEtProduitsPage/NosServicesEtProduitsPage";
import NosServicesEtProduitsEdit from "../pages/NosServicesEtProduitsPage/components/NosServicesEtProduitsEdit";
import NosServicesEtProduitsDetail from "../pages/NosServicesEtProduitsPage/components/NosServicesEtProduitsDetail";
import IntroductionNousRejoindrePage from "../pages/IntroductionNousRejoindrePage/IntroductionNousRejoindrePage";
import IntroductionNousRejoindreEdit
    from "../pages/IntroductionNousRejoindrePage/components/IntroductionNousRejoindreEdit";
import IntroductionNousRejoindreDetail
    from "../pages/IntroductionNousRejoindrePage/components/IntroductionNousRejoindreDetail";
import PostePage from "../pages/PostePage/PostePage";
import PosteEdit from "../pages/PostePage/components/PosteEdit";
import PosteDetail from "../pages/PostePage/components/PosteDetail";
import SlideTitlePage from "../pages/SlideTitlePage/SlideTitlePage";
import SlidePage from "../pages/SlidePage/SlidePage";
import ContactezNousPage from "../pages/ContactezNousPage/ContactezNousPage";
import UtilisateurPage from "../pages/UtilisateurPage/UtilisateurPage";
import ApplyPage from "../pages/ApplyPage/ApplyPage";

interface IRoute {
    path: string;
    title?: string | undefined;
    icon?: any | undefined;
    component: any;
    isHidden?: boolean | false;
}

export const MainRoutes: IRoute[] = [
    {
        path: "/",
        title: "Nous sommes",
        icon: Help,
        component: NousSommesPage,
    },
    {
        path: "/nos-services-et-produits",
        title: "Nos partenaires",
        icon: DesignServices,
        component: NosServicesEtProduitsPage,
    },
    {
        path: "/introduction-nous-rejoindre",
        title: "Nous Rejoindre",
        icon: WorkHistory,
        component: IntroductionNousRejoindrePage,
    },
    {
        path: "/poste",
        title: "Poste",
        icon: Work,
        component: PostePage,
    },
    {
        path: "/candidat",
        title: "Candidature",
        icon: Groups,
        component: ApplyPage,
    },
    {
        path: "/slide",
        title: "Slide",
        icon: PermMedia,
        component: SlidePage,
    },
	{
        path: "/titre-slide",
        title: "Titre sur Slide",
        icon: FeaturedPlayList,
        component: SlideTitlePage,
    },
    {
        path: "/contactez-nous",
        title: "Contactez-nous",
        icon: ContactMail,
        component: ContactezNousPage,
    },
    {
        path: "/utilisateur",
        title: "Utilisateur",
        icon: AccountCircle,
        component: UtilisateurPage,
    }
];

export const PagesRoutes: IRoute[] = [
    {
        path: "/nous-sommes",
        component: NousSommesPage
    },
    {
        path: "/nous-sommes/nouveau",
        component: NousSommesEdit
    },
    {
        path: "/nous-sommes/modifier/:id",
        component: NousSommesEdit
    },
    {
        path: "/nous-sommes/detail/:id",
        component: NousSommesDetail
    },
    {
        path: "/nos-services-et-produits/nouveau",
        component: NosServicesEtProduitsEdit
    },
    {
        path: "/nos-services-et-produits/modifier/:id",
        component: NosServicesEtProduitsEdit
    },
    {
        path: "/nos-services-et-produits/detail/:id",
        component: NosServicesEtProduitsDetail
    },
    {
        path: "/introduction-nous-rejoindre/nouveau",
        component: IntroductionNousRejoindreEdit
    },
    {
        path: "/introduction-nous-rejoindre/modifier/:id",
        component: IntroductionNousRejoindreEdit
    },
    {
        path: "/introduction-nous-rejoindre/detail/:id",
        component: IntroductionNousRejoindreDetail
    },
    {
        path: "/poste/nouveau",
        component: PosteEdit
    },
    {
        path: "/poste/modifier/:id",
        component: PosteEdit
    },
    {
        path: "/poste/detail/:id",
        component: PosteDetail
    },
]

