import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GridViewIcon from '@mui/icons-material/GridView';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "calc(60%)",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function CategorySubscriptModal({ subscriptList }: { subscriptList: object }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} >
                <p>
                    <GridViewIcon/>
                    차트 카테고리 보기
                </p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: "5px" }}>
                        차트 카테고리
                    </Typography>
                    <div style={{ borderBottom: "1px dashed grey" }} />
                    <br />
                    <div id="modal-modal-description">
                        {
                            Object.entries(subscriptList).map((el, index) => (

                                <div key={index} style={{ display: "flex", flexDirection: "row", marginTop: "25px", borderBottom: "1px dashed grey" }}>
                                    <div style={{ width: "20px", height: "20px", backgroundColor: `${el[1]}`, marginRight: "5px" }} />
                                    <div style={{ fontWeight: "400" }}>{el[0]}</div>
                                </div>
                            ))
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    );
}