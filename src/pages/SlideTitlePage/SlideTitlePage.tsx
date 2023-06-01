import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import {Button, CircularProgress, Typography} from "@mui/material";
import {Save} from "@mui/icons-material";

import {useDispatch, useSelector} from "react-redux";
import {
    getPendingSlideTitleSelector,
    getSlideTitleSelector
} from "../../core/redux/selector/SlideTitleSelectors";
import {fetchSlideTitleRequest, putSlideTitleRequest} from "../../core/redux/actions/SlideTitleActions";

export default function SlideTitlePage() {
    const [id, setId] = useState<number>(0);
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSlideTitleSelector);
    const slideTitle = useSelector(getSlideTitleSelector);

    const config = {
        readonly: false,
        placeholder: 'Start typings...'
    }

    useEffect(() => {
        dispatch(fetchSlideTitleRequest());
    }, [dispatch]);

    useEffect(() => {
        if (slideTitle) {
            setId(slideTitle.id || 0);
            setContent(slideTitle.title || '');
        }
    }, [slideTitle]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!!content) {
            dispatch(putSlideTitleRequest({id, title: content}));
        }
    }

    return (
        <div>
            <Typography component="h1" variant="h5" align="center">
                Titre du slide
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <div style={{marginBottom: 15}}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        onBlur={newContent => setContent(newContent)}
                    />

                </div>
                <div>
                    <Button variant="contained" color="primary" startIcon={<Save/>}
                            type="submit" style={{marginRight: 10}}>
                        {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                        Enregistrer
                    </Button>
                </div>
            </form>
        </div>
    );
}