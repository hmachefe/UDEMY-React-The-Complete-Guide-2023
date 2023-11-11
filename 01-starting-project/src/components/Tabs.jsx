export default function Tabs({buttons, children, buttonsContainer}) {
    const ButtonsContainer = buttonsContainer;
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}