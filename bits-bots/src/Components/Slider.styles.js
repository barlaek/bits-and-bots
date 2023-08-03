import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 150px;
    postion: relative;

    ${({ hasmultipleimages }) => {
        if (hasmultipleimages) {
            return `
                &:before {
                    background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
                    position: abosulte;
                    left: 0;
                    height: 100%;
                    content: "";
                    z-index: 2;
                }

                &:after {
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    width: 48px;
                    content: "";
                    z-index: 2;
                }
            `;
        }
        return null;
    }};
`;

export const CarouselImages = styled.div.attrs({
    style: ({ position }) => ({
        transform: `translateX(${position * -100}%)`,
    }),
})`
    display: flex;
    transition: transform 0.45s ease;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ArrowButton = styled.button`
	background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;
    top: calc(50% - 0.5 * 3rem);
    padding: 0;
    display: flex;
    justify-content: center;
	z-index: 3;
`;

export const PreviousButton = styled(ArrowButton)`
	left: 0;
`;

export const NextButton = styled(ArrowButton)`
	right: 0;
`;

export const Arrow = styled.i`
	font-size: 5rem;
`;

// export const NavButton = styled.button`
//     width: 35px;
//     height: 35px;
//     outline: none;
//     border: none;
//     background: none;
//     cursor: pointer;
//     padding: 0;
//     position: absolute;
//     top: 50%;
//     border-radius: 50%;
//     color: white;
//     box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 --3em 3em rgba(3,3,3,0.5);
//     transform: translate(0, -50%);
//     ${(props) => props.right === true ? css` right: 2%` : css`left: 2%`}
// `;