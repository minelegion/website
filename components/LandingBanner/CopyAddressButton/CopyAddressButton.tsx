import { Button, ButtonProps } from "@material-ui/core";
import { useSnackbar } from "notistack";

const CopyAddressButton = (props: ButtonProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const copy = () => {
        navigator.clipboard.writeText("play.minelegion.hu");
        enqueueSnackbar("Sikeresen vágólapra másolva!");
    };

    return (
        <Button {...props} onClick={copy} />
    );
};

export default CopyAddressButton;