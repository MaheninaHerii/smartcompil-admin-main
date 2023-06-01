import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIntroductionNousRejoindreSelector} from "../../../core/redux/selector/IntroductionNousRejoindreSelectors";
import {useEffect} from "react";
import {fetchIntroductionNousRejoindreRequest} from "../../../core/redux/actions/IntroductionNousRejoindreActions";
import {rawMarkup} from "../../../core/Utils";

export default function IntroductionNousRejoindreDetail() {
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch();
    const introductionNousRejoindre = useSelector(getIntroductionNousRejoindreSelector);

    useEffect(() => {
        if (!!id) {
            const introductionNousRejoindreId: number = Number.parseInt(id, 0);
            if (introductionNousRejoindreId > 0) {
                dispatch(fetchIntroductionNousRejoindreRequest(introductionNousRejoindreId));
            }
        }
    }, [dispatch]);

    return (
        <div>
            <Typography component="h1" variant="h5">
                <b>Nos offres d'emploi en cours</b>
            </Typography>
            <Typography component="h1" variant="h5">
                <span
                    dangerouslySetInnerHTML={rawMarkup(introductionNousRejoindre && introductionNousRejoindre.content || '')}/>
            </Typography>
        </div>
    );
}