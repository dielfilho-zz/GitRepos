import * as S from './style';
import Button from '@material-ui/core/Button';

const GitModal = (props: any) => {
    if (!props.show) {
        return null;
    }   

    return (
        <S.Modal onClick={props.onClose}>
            <S.ModalContent onClick={e => e.stopPropagation()}>
                <S.ModalHeader>
                    <S.ModalTitle>
                        <span>{props.title}</span>
                    </S.ModalTitle>
                </S.ModalHeader>
                <S.ModalBody>
                    {props.children}
                </S.ModalBody>
                <S.ModalFooter>
                    <Button onClick={props.onClose}>Close</Button>
                </S.ModalFooter>
            </S.ModalContent>
        </S.Modal>
    );
}



export default GitModal