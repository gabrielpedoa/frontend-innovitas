import styled from "styled-components";

interface HamburgerProps {
  open: boolean;
}

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  padding: 0 40px;
  height: 70px;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px;

    background: transparent;
    backdrop-filter: none;
  }
`;

export const NavMenuItems = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  .menu-left {
    display: flex;
    align-items: center;
    gap: 20px;
    white-space: nowrap;
  }
  .menu-right {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 220px;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px 20px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
    z-index: 1000;

    .menu-left {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }

    .menu-right {
      width: 100%;
    }
  }
`;

export const NavMenuButton = styled.button`
  color: white;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  padding: 10px 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 769px) {
    &#logout {
      margin-left: auto;
      width: auto;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const NavHamburger = styled.div<HamburgerProps>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
  z-index: 1100;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${({ open }) =>
    open &&
    `
    span:nth-child(1) {
      transform: translateY(8.5px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-8.5px) rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavOverlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 900;
`;
