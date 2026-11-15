#!/usr/bin/env bash
# Zip a language pack from "Anatomical 3D Model/lang/<id>/".
# Usage: scripts/build_lang_pack.sh zh-Hant   ->   dist/zh-Hant-language-pack-<version>.zip
set -euo pipefail
id="${1:?usage: build_lang_pack.sh <pack id, e.g. zh-Hant>}"
root="$(cd "$(dirname "$0")/.." && pwd)"
dir="$root/Anatomical 3D Model/lang/$id"
[ -f "$dir/pack.json" ] || { echo "no pack.json in $dir" >&2; exit 1; }
version="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["version"])' "$dir/pack.json")"
mkdir -p "$root/dist"
out="$root/dist/$id-language-pack-$version.zip"
rm -f "$out"
(cd "$root/Anatomical 3D Model/lang" && zip -qr "$out" "$id" -x '*.DS_Store')
echo "$out"
