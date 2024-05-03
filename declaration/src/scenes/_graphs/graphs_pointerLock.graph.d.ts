/**
 * Generated by the Babylon.JS Editor v4.7.0
 */
import { Scene } from "@babylonjs/core/scene";
/**
 * Tells that this script has been generated by a graph.
 */
export declare const IsGraph: boolean;
/**
 * Tells wether or not the graph has been attached to at least one node or not.
 */
export declare let IsGraphAttached: boolean;
/**
 * Defines the generated class of the graph.
 */
export default class GraphClass {
    private _scene;
    private _attachedObject;
    /**
     * Constructor.
     * @param scene defines the scene where the graph is running.
     */
    constructor(_scene: Scene, _attachedObject: any);
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    /**
     * Returns the reference to the current scene the graph is running.
     */
    getScene(): Scene;
    /**
     * Returns the reference to the object the graph is attached to.
     */
    getAttachedObject<T>(): T;
}
