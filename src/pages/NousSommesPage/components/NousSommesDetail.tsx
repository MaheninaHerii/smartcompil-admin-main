import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNousSommesSelector} from "../../../core/redux/selector/NousSommesSelectors";
import {useEffect} from "react";
import {fetchNousSommesRequest} from "../../../core/redux/actions/NousSommesActions";
import {rawMarkup} from "../../../core/Utils";

export default function NousSommesDetail() {
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch();
    const nousSommes = useSelector(getNousSommesSelector);

    useEffect(() => {
        if (!!id) {
            const nousSommesId: number = Number.parseInt(id, 0);
            if (nousSommesId > 0) {
                dispatch(fetchNousSommesRequest(nousSommesId));
            }
        }
    }, [dispatch]);

    return (
        <div>
            <Typography component="h1" variant="h5" align="center">
                Titre : {nousSommes && nousSommes.title || ''}
            </Typography>
            <Typography component="h1" variant="h5" align="center">
                <span dangerouslySetInnerHTML={rawMarkup(nousSommes && nousSommes.content || '')}/>
            </Typography>
            {nousSommes && !!nousSommes.image &&
            <img src={nousSommes.image} width={500} height={200}
                 alt={nousSommes.image}/>
            }
        </div>
    );
}