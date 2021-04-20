export const xsltCode = `<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="*">
        <xsl:copy>
            <xsl:apply-templates />
        </xsl:copy>
    </xsl:template>
    <xsl:template match="f">
        <g><xsl:apply-templates /></g>
    </xsl:template>
    <xsl:template match="power">
        <xsl:variable name="base" select="child::*[1]"/>
        <xsl:variable name="exp" select="child::*[2]"/>
        <times>
            <xsl:apply-templates select="$base"/>
            <times>
                <xsl:copy-of select="$exp" />
                <power>
                    <xsl:copy-of select="$base" />
                    <xsl:apply-templates select="$exp"/>
                </power>
            </times>
        </times>
    </xsl:template>
    <xsl:template match="times">
        <xsl:variable name="child1" select="child::*[1]"/>
        <xsl:variable name="child2" select="child::*[2]"/>
        <plus>
            <times>
                <xsl:apply-templates select="$child1"/>
                <xsl:copy-of select="$child2" />
            </times>
            <times>
                <xsl:copy-of select="$child1"/>
                <xsl:apply-templates select="$child2" />
            </times>
        </plus>
    </xsl:template>
    <xsl:template match="divide">
        <xsl:variable name="child1" select="child::*[1]"/>
        <xsl:variable name="child2" select="child::*[2]"/>
        <divide>
            <minus>
                <times>
                    <xsl:apply-templates select="$child1"/>
                    <xsl:copy-of select="$child2" />
                </times>
                <times>
                    <xsl:copy-of select="$child1"/>
                    <xsl:apply-templates select="$child2" />
                </times>
            </minus>
            <power>
                <xsl:copy-of select="$child2" />
                <const>2</const>
            </power>
        </divide>
    </xsl:template>
    <xsl:template match="plus">
        <plus><xsl:apply-templates /></plus>
    </xsl:template>
    <xsl:template match="minus">
        <minus><xsl:apply-templates /></minus>
    </xsl:template>
    <xsl:template match="var">
        <const>1</const>
    </xsl:template>
    <xsl:template match="const">
        <xsl:choose>
            <xsl:when test="parent::power">
                <const><xsl:value-of select="current() - 1" /></const>
            </xsl:when>
            <xsl:otherwise>
                <const>0</const>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>`;
