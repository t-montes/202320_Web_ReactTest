import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Expect Likes to be 0 by default", () => {
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Expect dislike button to decrement likes", () => {
    render(<Like/>);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});

test("Expect like button to increment likes", () => {
    render(<Like/>);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});
