import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex1Cb() {
	const onClick = useCallback(callbackFactory("Flex1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex2Cb() {
	const onClick = useCallback(callbackFactory("Flex2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox1Cb() {
	const onClick = useCallback(callbackFactory("TextBox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput2Cb() {
	const onChange = useCallback(callbackFactory("Input2", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input2", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useInput4Cb() {
	const onChange = useCallback(callbackFactory("Input4", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input4", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useInput5Cb() {
	const onChange = useCallback(callbackFactory("Input5", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input5", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useFlex3Cb() {
	const onClick = useCallback(callbackFactory("Flex3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}