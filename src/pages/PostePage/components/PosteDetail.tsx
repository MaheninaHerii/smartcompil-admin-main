import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPosteSelector} from "../../../core/redux/selector/PosteSelectors";
import {useEffect} from "react";
import {fetchPosteRequest} from "../../../core/redux/actions/PosteActions";
import {rawMarkup} from "../../../core/Utils";

export default function PosteDetail() {
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch();
    const poste = useSelector(getPosteSelector);

    useEffect(() => {
        if (!!id) {
            const posteId: number = Number.parseInt(id, 0);
            if (posteId > 0) {
                dispatch(fetchPosteRequest(posteId));
            }
        }
    }, [dispatch]);

    return (
        <>
            {poste && (<div>
                <Typography component="h1" variant="h5" style={{marginBottom: 15}} align="center">
                    {poste.title || ''}
                </Typography>
                {!!poste.description && (<>
                    <Typography component="h1" variant="h5" align="center">
                        Déscription
                    </Typography>
                    <Typography component="h1" variant="h5">
                        <span dangerouslySetInnerHTML={rawMarkup(poste.description)}/>
                    </Typography>
                </>)
                }
                {!!poste.mission && (<>
                    <Typography component="h1" variant="h5" align="center">
                        Mission
                    </Typography>
                    <Typography component="h1" variant="h5">
                        <span dangerouslySetInnerHTML={rawMarkup(poste.mission)}/>
                    </Typography>
                </>)
                }
                {!!poste.profile && (<>
                    <Typography component="h1" variant="h5" align="center">
                        Profil
                    </Typography>
                    <Typography component="h1" variant="h5">
                        <span dangerouslySetInnerHTML={rawMarkup(poste.profile)}/>
                    </Typography>
                </>)
                }
                {!!poste.remuneration && (<>
                    <Typography component="h1" variant="h5" align="center">
                        Rémuneration
                    </Typography>
                    <Typography component="h1" variant="h5" align="center">
                        <span dangerouslySetInnerHTML={rawMarkup(poste.remuneration)}/>
                    </Typography>
                </>)
                }
                {!!poste.contact && (<>
                    <Typography component="h1" variant="h5" align="center">
                        Contact
                    </Typography>
                    <Typography component="h1" variant="h5" align="center">
                        <span dangerouslySetInnerHTML={rawMarkup(poste.contact)}/>
                    </Typography>
                </>)
                }
            </div>)}
        </>
    );
}