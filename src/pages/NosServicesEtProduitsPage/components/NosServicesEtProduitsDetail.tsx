import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNosServicesEtProduitsSelector} from "../../../core/redux/selector/NosServicesEtProduitsSelectors";
import {useEffect} from "react";
import {fetchNosServicesEtProduitsRequest} from "../../../core/redux/actions/NosServicesEtProduitsActions";
import {rawMarkup} from "../../../core/Utils";

export default function NosServicesEtProduitsDetail() {
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch();
    const nosServicesEtProduits = useSelector(getNosServicesEtProduitsSelector);

    useEffect(() => {
        if (!!id) {
            const nosServicesEtProduitsId: number = Number.parseInt(id, 0);
            if (nosServicesEtProduitsId > 0) {
                dispatch(fetchNosServicesEtProduitsRequest(nosServicesEtProduitsId));
            }
        }
    }, [dispatch]);

    return (
        <div>
            <Typography component="h1" variant="h5">
                Titre : {nosServicesEtProduits && nosServicesEtProduits.title || ''}
            </Typography>
            <Typography component="h1" variant="h5">
                <span
                    dangerouslySetInnerHTML={rawMarkup(nosServicesEtProduits && nosServicesEtProduits.content || '')}/>
            </Typography>
            {nosServicesEtProduits && !!nosServicesEtProduits.image &&
            <img
                src={nosServicesEtProduits.image}
                width={850} height={450} alt={nosServicesEtProduits.image}/>
            }
        </div>
    );
}