import styled from "styled-components";

const Button = styled.button`
	max-width: 75px;
	font-size: 5pt;
	color: #000;
	background-color: #FFFFFF;
	box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 4px 0px 0px 4px;
`;

const AppBeansFilter = () => {
	return (
		<div>
			<span>Or filter</span>
			<Button>Brazil</Button>
			<Button>Kenya</Button>
			<Button>Columbia</Button>
		</div>
	)
}

export default AppBeansFilter;