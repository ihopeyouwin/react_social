import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profilestatus";
describe("profileStatus component", () => {
    test("status from props should be in the state ", () => {
        const component = create(<ProfileStatus status="start status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("start status");
    });
    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status="start status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("after creation span length should be 1 ", () => {
        const component = create(<ProfileStatus status="start status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children.length).toBe(1);
    });
    test("after creation input should not be displayed ", () => {
        const component = create(<ProfileStatus status="start status" />);
        const root = component.root;
        expect(()=>{
            let input = root.findByType('input');
        }).toThrow();
    });
    test("after creation span should contain correct status", () => {
        const component = create(<ProfileStatus status="start status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[1]).toBe("start status");
    });
    test("input should be switched to editmode", () => {
        const component = create(<ProfileStatus status="start status" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("start status");
    });
});