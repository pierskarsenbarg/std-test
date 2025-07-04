import * as pulumi from "@pulumi/pulumi";
import * as std from "@pulumi/std";

export const b64 = std.base64decode({
    input: "1234"
});